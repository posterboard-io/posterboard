"use client"

import { useState, useEffect } from "react"
import { citySizes } from "~/components/pb/tech-stacks"
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

export default function CitiesDropDown() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState<string[]>([]);

    const { data: userCity, isLoading: isLoadingCity, isError: isCityError } = api.onboarding.getUserOnboardingLocations.useQuery();
    const updateUserCityMutation = api.onboarding.updateUserOnboardingLocations.useMutation();

    useEffect(() => {
        if (userCity?.onboardingLocation) {
            setSelectedCity(userCity.onboardingLocation);
        }
    }, [userCity?.onboardingLocation]);

    const handleSelect = (currentValue: string) => {
        const newSelectedCities = selectedCity.includes(currentValue)
            ? selectedCity.filter(value => value !== currentValue)
            : [...selectedCity, currentValue];

        setSelectedCity(newSelectedCities);
        updateUserCityMutation.mutate({ locations: newSelectedCities }, {
            onSuccess: () => toast({ title: "Cities Updated" }),
            onError: () => toast({ title: "Error updating cities" })
        });
    };

    const selectedLabels = selectedCity.map(value =>
        citySizes.find(city => city.value === value)?.label
    ).join(", ") || "Select Cities...";

    if (isLoadingCity) return <Loading />;

    if (isCityError) return <div>Error loading Cities</div>;

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
                        <CommandInput placeholder="Search Cities..." />
                        <CommandEmpty>No city found.</CommandEmpty>
                        <CommandGroup>
                            {citySizes.map((city) => (
                            <CommandItem
                                key={city.value}
                                value={city.value}
                                onSelect={() => handleSelect(city.value)}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedCity.includes(city.value) ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {city.label}
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
