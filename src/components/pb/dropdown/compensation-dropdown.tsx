"use client"

import { useState, useEffect } from "react"
import { compensationRanges } from "~/components/pb/tech-stacks"
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

export default function CompensationDropDown() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [selectedCompensation, setSelectedCompensation] = useState<string[]>([]);

    const { data: userCompensation, isLoading: isLoadingCompensation, isError: isCompensationError } = api.onboarding.getUserOnboardingTotalCompensation.useQuery();
    const updateUserCompensationMutation = api.onboarding.updateUserOnboardingTotalCompensation.useMutation();

    useEffect(() => {
        if (userCompensation?.onboardingTotalCompensation) {
            setSelectedCompensation(userCompensation.onboardingTotalCompensation);
        }
    }, [userCompensation?.onboardingTotalCompensation]);

    const handleSelect = (currentValue: string) => {
        const newSelectedCompensations = selectedCompensation.includes(currentValue)
            ? selectedCompensation.filter(value => value !== currentValue)
            : [...selectedCompensation, currentValue];

        setSelectedCompensation(newSelectedCompensations);
        updateUserCompensationMutation.mutate({ totalCompensation: newSelectedCompensations }, {
            onSuccess: () => toast({ title: "Compensation Updated ✅" }),
            onError: () => toast({ title: "Error updating compensation" })
        });
    };

    const selectedLabels = selectedCompensation.map(value =>
        compensationRanges.find(compensation => compensation.value === value)?.label
    ).join(", ") || "Select Compensation...";

    if (isLoadingCompensation) return <Loading />;

    if (isCompensationError) return <div>Error loading compensation ranges</div>;

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
                        <CommandInput placeholder="Search Compensation..." />
                        <CommandEmpty>No compensation found.</CommandEmpty>
                        <CommandGroup>
                            {compensationRanges.map((compensation) => (
                            <CommandItem
                                key={compensation.value}
                                value={compensation.value}
                                onSelect={() => handleSelect(compensation.value)}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedCompensation.includes(compensation.value) ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {compensation.label}
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
