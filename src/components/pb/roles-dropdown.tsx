"use client"

import { useState, useEffect } from "react"
import { roles } from "~/components/pb/tech-stacks"
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

export default function RolesDropDown() {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string[]>([]);

    const { data: userRole, isLoading: isLoadingRole, isError: isRoleError } = api.onboarding.getUserOnboardingRole.useQuery();
    const updateUserRoleMutation = api.onboarding.updateUserOnboardingRole.useMutation();

    useEffect(() => {
        if (userRole?.onboardingRoleType) {
            setSelectedRole(userRole.onboardingRoleType);
        }
    }, [userRole?.onboardingRoleType]);

    const handleSelect = (currentValue: string) => {
        const newSelectedRoles = selectedRole.includes(currentValue)
            ? selectedRole.filter(value => value !== currentValue)
            : [...selectedRole, currentValue];

        setSelectedRole(newSelectedRoles);
        updateUserRoleMutation.mutate({ role: newSelectedRoles }, {
            onSuccess: () => toast({ title: "Role Updated" }),
            onError: () => toast({ title: "Error updating role" })
        });
    };

    const selectedLabels = selectedRole.map(value =>
        roles.find(role => role.value === value)?.label
    ).join(", ") || "Select roles...";

    if (isLoadingRole) return <Loading />;

    if (isRoleError) return <div>Error loading roles</div>;

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
                            {roles.map((role) => (
                            <CommandItem
                                key={role.value}
                                value={role.value}
                                onSelect={() => handleSelect(role.value)}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedRole.includes(role.value) ? "opacity-100" : "opacity-0"
                                )}
                                />
                                {role.label}
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
