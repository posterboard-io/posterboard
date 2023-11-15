"use client"

import { useState, useEffect } from "react"
import { companySizes } from "~/components/pb/tech-stacks"
import { Button } from "~/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"
import { api } from "~/trpc/react"
import { useToast } from '~/components/ui/use-toast'
import Loading from '~/components/pb/utils/loading';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "~/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command"

export default function CompanySizeDropDown() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);

    const { data: userCompanySize, isLoading: isLoadingCompanySize, isError: isCompanySizeError } = api.onboarding.getUserOnboardingCompanySize.useQuery();
    const updateUserCompanySizeMutation = api.onboarding.updateUserOnboardingCompanySize.useMutation();

    useEffect(() => {
        if (userCompanySize?.onboardingCompanySize) {
            setSelectedCompanySize(userCompanySize.onboardingCompanySize);
        }
    }, [userCompanySize?.onboardingCompanySize]);

    const handleSelect = (currentValue: string) => {
        const newSelectedCompanySizes = selectedCompanySize.includes(currentValue)
            ? selectedCompanySize.filter(value => value !== currentValue)
            : [...selectedCompanySize, currentValue];

        setSelectedCompanySize(newSelectedCompanySizes);
        updateUserCompanySizeMutation.mutate({ companySize: newSelectedCompanySizes }, {
            onSuccess: () => toast({ title: "Company Size Updated" }),
            onError: () => toast({ title: "Error updating company size" })
        });
    };

    const selectedLabels = selectedCompanySize.map(value =>
        companySizes.find(role => role.value === value)?.label
    ).join(", ") || "Select Company Sizes...";

    if (isLoadingCompanySize) return <Loading />;

    if (isCompanySizeError) return <div>Error loading roles</div>;

    return (
        <div className="flex flex-col">
            <div className="my-4">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-fit max-w-[200px] justify-between overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                        {selectedLabels}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                        <CommandInput placeholder="Search Company Sizes..." />
                        <CommandEmpty>No company sizes found.</CommandEmpty>
                        <CommandGroup>
                            {companySizes.map((companySize) => (
                            <CommandItem
                                key={companySize.value}
                                value={companySize.value}
                                onSelect={() => handleSelect(companySize.value)}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedCompanySize.includes(companySize.value) ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {companySize.label}
                            </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    </div>
    )
}
