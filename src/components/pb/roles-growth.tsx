"use client"

import React, { useState, useEffect } from "react"
import { roles, currentLevels, companySizes, citySizes, compensationRanges, industryTypes } from "~/components/pb/tech-stacks"
import { Button } from "~/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"
import { api } from "~/trpc/react"
import { useToast } from '~/components/ui/use-toast'
import { Checkbox } from "~/components/ui/checkbox"
import Loading from '~/components/pb/loading';

export default function RolesAndGrowth() {

    const { toast } = useToast()

    const [selectedRole, setSelectedRole] = useState<string[]>([]);
    const [selectedLevel, setSelectedLevel] = useState<string[]>([]);
    const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);
    const [selectedCitySize, setSelectedCitySize] = useState<string[]>([]);
    const [selectedIndustryType, setSelectedIndustryType] = useState<string[]>([]);
    const [selectedCompensationRange, setSelectedCompensationRange] = useState<string[]>([]);

    const { data: userRole, isLoading: isLoadingRole } = api.onboarding.getUserOnboardingRole.useQuery();
    const { data: userLevel } = api.onboarding.getUserOnboardingLevel.useQuery();
    const { data: userLocation } = api.onboarding.getUserOnboardingLocations.useQuery();
    const { data: userIndustry } = api.onboarding.getUserOnboardingCompanyIndustry.useQuery();
    const { data: userCompensation } = api.onboarding.getUserOnboardingTotalCompensation.useQuery();
    const { data: userCompanySize } = api.onboarding.getUserOnboardingCompanySize.useQuery();

    useEffect(() => {
        if (userRole?.onboardingRoleType) {
            setSelectedRole(userRole.onboardingRoleType);
        }
        if (userLevel?.onboardingLevel) {
            setSelectedLevel(userLevel.onboardingLevel);
        }
        if (userLocation?.onboardingLocation) {
            setSelectedCitySize(userLocation.onboardingLocation);
        }
        if (userIndustry?.onboardingCompanyIndustry) {
            setSelectedIndustryType(userIndustry.onboardingCompanyIndustry);
        }
        if (userCompensation?.onboardingTotalCompensation) {
            setSelectedCompensationRange(userCompensation.onboardingTotalCompensation);
        }
        if (userCompanySize?.onboardingCompanySize) {
            setSelectedCompanySize(userCompanySize.onboardingCompanySize);
        }        
        }, [
            userRole,
            userLevel,
            userLocation,
            userIndustry,
            userCompensation,
            userCompanySize,        
        ]
    );

    const updateUserOnboardingLevelMutation = api.onboarding.updateUserOnboardingLevel.useMutation({
        onSuccess: () => {
            toast({
              title: "Level Updated",
            })
          }
    });

    const updateUserRoleMutation = api.onboarding.updateUserOnboardingRole.useMutation({
        onSuccess: () => {
            toast({
              title: "Role Updated",
            })
          }
    });

    const updateUserOnboardingLocationsMutation = api.onboarding.updateUserOnboardingLocations.useMutation({
        onSuccess: () => {
            toast({
              title: "Location Updated",
            })
          }
    });

    const updatedCompanySizeSelection = api.onboarding.updateUserOnboardingCompanySize.useMutation({
        onSuccess: () => {
            toast({
              title: "Company Size Updated",
            })
          }
    });

    const updatedIndustryTypeSelection = api.onboarding.updateUserOnboardingCompanyIndustry.useMutation({
        onSuccess: () => {
            toast({
              title: "Industry Type Updated",
            })
          }
    });

    const updatedCompensationRangeSelection = api.onboarding.updateUserOnboardingTotalCompensation.useMutation({
        onSuccess: () => {
            toast({
              title: "Compensation Range Updated",
            })
          }
    });

    const handleRoleSelect = (value: string) => {
        const updatedSelection = selectedRole.includes(value) ? selectedRole.filter(item => item !== value) : [...selectedRole, value];
        setSelectedRole(updatedSelection);

        const updatedLevelSelection = selectedLevel.includes(value) ? selectedLevel.filter(item => item !== value) : [...selectedLevel, value];
        setSelectedLevel(updatedLevelSelection);

        const updatedCitySizeSelection = selectedCitySize.includes(value) ? selectedCitySize.filter(item => item !== value) : [...selectedCitySize, value];
        setSelectedCitySize(updatedCitySizeSelection);

        const updatedCompanySizeSelections = selectedCompanySize.includes(value) ? selectedCompanySize.filter(item => item !== value) : [...selectedCompanySize, value];
        setSelectedCompanySize(updatedCompanySizeSelections);

        const updatedIndustryTypeSelections = selectedIndustryType.includes(value) ? selectedIndustryType.filter(item => item !== value) : [...selectedIndustryType, value];
        setSelectedIndustryType(updatedIndustryTypeSelections);

        const updatedCompensationRangeSelections = selectedCompensationRange.includes(value) ? selectedCompensationRange.filter(item => item !== value) : [...selectedCompensationRange, value];
        setSelectedCompensationRange(updatedCompensationRangeSelections);

        // Call the mutate method with the updated selection
        updateUserRoleMutation.mutate({ role: updatedSelection });
        updateUserOnboardingLevelMutation.mutate({ level: updatedLevelSelection });
        updateUserOnboardingLocationsMutation.mutate({ locations: updatedCitySizeSelection });
        updatedCompanySizeSelection.mutate({ companySize: updatedCompanySizeSelections });
        updatedIndustryTypeSelection.mutate({ companyIndustry: updatedIndustryTypeSelections });
        updatedCompensationRangeSelection.mutate({ totalCompensation: updatedCompensationRangeSelections });
    };
    
    const renderItemRow = (text: string, placeholder: string, items: any, selectedValue: string[], onSelect: any) => (
        <div className="flex items-center justify-between text-lg font-normal py-2">
            <div className="">
                <p>{text}</p>
            </div>
            <div className="">
                <select
                    value={selectedValue}
                    onChange={(e) => onSelect(e.target.value)}
                    className="w-[180px]"
                >
                    <option value="">{placeholder}</option>
                    {items.map((item: any) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );

    if (isLoadingRole) {
        return <Loading />
    }

    return (
        <div className="flex flex-col">
            {renderItemRow("I'm looking for a role as a", "Software Engineer", roles, selectedRole, handleRoleSelect)}
            {renderItemRow("I want to see jobs at a level of", "Junior", currentLevels, selectedLevel, setSelectedLevel)}
            {renderItemRow("I want to work at a company with a size of", "Large", companySizes, selectedCompanySize, setSelectedCompanySize)}
            {renderItemRow("I want to work in or near", "Phoenix, AZ", citySizes, selectedCitySize, setSelectedCitySize)}
            {renderItemRow("I want to work in industry", "Finance", industryTypes, selectedIndustryType, setSelectedIndustryType)}
            {renderItemRow("I want a minimum total compensation of", "$200,000", compensationRanges, selectedCompensationRange, setSelectedCompensationRange)}
        </div>
    );
}

