"use client"

import { useState, useEffect } from "react"
import { industryTypes } from "~/components/pb/tech-stacks"
import { Button } from "~/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"
import { api } from "~/trpc/react"
import { useToast } from '~/components/ui/use-toast'
import Loading from '~/components/pb/loading';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "~/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command"

export default function IndustryTypesDropDown() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [selectedIndustryTypes, setSelectedIndustryTypes] = useState<string[]>([]);

    const { data: userIndustryTypes, isLoading: isLoadingIndustryTypes, isError: isIndustryTypesError } = api.onboarding.getUserOnboardingCompanyIndustry.useQuery();
    const updateUserIndustryTypesMutation = api.onboarding.updateUserOnboardingCompanyIndustry.useMutation();

    useEffect(() => {
        if (userIndustryTypes?.onboardingCompanyIndustry) {
            setSelectedIndustryTypes(userIndustryTypes.onboardingCompanyIndustry);
        }
    }, [userIndustryTypes?.onboardingCompanyIndustry]);

    const handleSelect = (currentValue: string) => {
        const newSelectedIndustryTypes = selectedIndustryTypes.includes(currentValue)
            ? selectedIndustryTypes.filter(value => value !== currentValue)
            : [...selectedIndustryTypes, currentValue];

        setSelectedIndustryTypes(newSelectedIndustryTypes);
        updateUserIndustryTypesMutation.mutate({ companyIndustry: newSelectedIndustryTypes }, {
            onSuccess: () => toast({ title: "Industries Updated" }),
            onError: () => toast({ title: "Error updating industries" })
        });
    };

    const selectedLabels = selectedIndustryTypes.map(value =>
        industryTypes.find(industries => industries.value === value)?.label
    ).join(", ") || "Select Industries...";

    if (isLoadingIndustryTypes) return <Loading />;

    if (isIndustryTypesError) return <div>Error loading industries</div>;

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
                        <CommandInput placeholder="Search Roles..." />
                        <CommandEmpty>No role found.</CommandEmpty>
                        <CommandGroup>
                            {industryTypes.map((industries) => (
                            <CommandItem
                                key={industries.value}
                                value={industries.value}
                                onSelect={() => handleSelect(industries.value)}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedIndustryTypes.includes(industries.value) ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {industries.label}
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
