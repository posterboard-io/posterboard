"use client"

import { useState, useEffect } from "react"
import { currentLevels } from "~/components/pb/tech-stacks"
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

export default function LevelsDropDown() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState<string[]>([]);

    const { data: userLevel, isLoading: isLoadingLevel, isError: isLevelError } = api.onboarding.getUserOnboardingLevel.useQuery();
    const updateUserLevelMutation = api.onboarding.updateUserOnboardingLevel.useMutation();

    useEffect(() => {
        if (userLevel?.onboardingLevel) {
            setSelectedLevel(userLevel.onboardingLevel);
        }
    }, [userLevel?.onboardingLevel]);

    const handleSelect = (currentValue: string) => {
        const newSelectedLevels = selectedLevel.includes(currentValue)
            ? selectedLevel.filter(value => value !== currentValue)
            : [...selectedLevel, currentValue];

        setSelectedLevel(newSelectedLevels);
        updateUserLevelMutation.mutate({ level: newSelectedLevels }, {
            onSuccess: () => toast({ title: "Role Updated" }),
            onError: () => toast({ title: "Error updating role" })
        });
    };

    const selectedLabels = selectedLevel.map(value =>
        currentLevels.find(level => level.value === value)?.label
    ).join(", ") || "Select levels...";

    if (isLoadingLevel) return <Loading />;

    if (isLevelError) return <div>Error loading levels</div>;

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
                        <CommandInput placeholder="Search Levels..." />
                        <CommandEmpty>No level found.</CommandEmpty>
                        <CommandGroup>
                            {currentLevels.map((level) => (
                            <CommandItem
                                key={level.value}
                                value={level.value}
                                onSelect={() => handleSelect(level.value)}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedLabels.includes(level.value) ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {level.label}
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
