"use client"

import React, { useState, useEffect } from "react"
import { roles, currentLevels, companySizes, citySizes, compensationRanges, industryTypes } from "~/components/pb/tech-stacks"
import { Button } from "~/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import { api } from "~/trpc/react"
import { useToast } from '~/components/ui/use-toast'
import Loading from '~/components/pb/loading';

export default function RolesAndGrowth() {

    const { toast } = useToast()

    const [selectedRole, setSelectedRole] = useState<string[]>([]);
    // const [selectedLevel, setSelectedLevel] = useState<string[]>([]);
    // const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);
    // const [selectedCitySize, setSelectedCitySize] = useState<string[]>([]);
    // const [selectedIndustryType, setSelectedIndustryType] = useState<string[]>([]);
    // const [selectedCompensationRange, setSelectedCompensationRange] = useState<string[]>([]);


    const { data: userRole, isLoading: isLoadingRole } = api.onboarding.getUserOnboardingRole.useQuery();
    // const { data: userLevel } = api.onboarding.getUserOnboardingLevel.useQuery();
    // const { data: userLocation } = api.onboarding.getUserOnboardingLocations.useQuery();
    // const { data: userIndustry } = api.onboarding.getUserOnboardingCompanyIndustry.useQuery();
    // const { data: userCompensation } = api.onboarding.getUserOnboardingTotalCompensation.useQuery();
    // const { data: userCompanySize } = api.onboarding.getUserOnboardingCompanySize.useQuery();

    useEffect(() => {
        if (userRole?.onboardingRoleType) {
            setSelectedRole(userRole.onboardingRoleType);
            console.log("userRole.onboardingRoleType", userRole.onboardingRoleType);
            console.log("userRole", userRole);
        }
        // if (userLevel?.onboardingLevel) {
        //     setSelectedLevel(userLevel.onboardingLevel);
        // }
        // if (userLocation?.onboardingLocation) {
        //     setSelectedCitySize(userLocation.onboardingLocation);
        // }
        // if (userIndustry?.onboardingCompanyIndustry) {
        //     setSelectedIndustryType(userIndustry.onboardingCompanyIndustry);
        // }
        // if (userCompensation?.onboardingTotalCompensation) {
        //     setSelectedCompensationRange(userCompensation.onboardingTotalCompensation);
        // }
        // if (userCompanySize?.onboardingCompanySize) {
        //     setSelectedCompanySize(userCompanySize.onboardingCompanySize);
        // }        
        }, [
            userRole,
        //     userLevel,
        //     userLocation,
        //     userIndustry,
        //     userCompensation,
        //     userCompanySize,        
        // ]
        ]
    );

    const updateUserOnboardingLevelMutation = api.onboarding.updateUserOnboardingLevel.useMutation({
        onSuccess: () => {
            toast({
              title: "Tech Stack Updated",
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

    
    // const handleRoleSelect = (value: string) => {
    //     console.log("value", value);
    //     const updatedSelection = selectedRole.includes(value) ? selectedRole.filter(item => item !== value) : [...selectedRole, value];
    //     setSelectedRole(updatedSelection);
    
    //     // Call the mutate method with the updated selection
    //     updateUserOnboardingLevelMutation.mutate({ level: updatedSelection });
    //     console.log("updatedSelection", updatedSelection);
    // };

    const handleRoleSelect = (value: any) => {
        const updatedSelection = selectedRole.includes(value) ? selectedRole.filter(item => item !== value) : [...selectedRole, value];
        setSelectedRole(updatedSelection);
    
        // Call the mutate method with the updated selection
        updateUserRoleMutation.mutate({ role: updatedSelection });
    };
    
    const renderItemRow = (text: any, placeholder: any, items: any, selectedValue: any, onSelect: any) => (
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

    // const renderItemRow = (text: string, placeholder: string, items: any[], selectedValue: any[], onSelect: (value: string) => void) => (
    //     <div className="flex items-center justify-between text-lg font-normal py-2">
    //     <div className="">
    //         <p>{text}</p>
    //     </div>
    //     <div className="">
    //         <Select>
    //             <SelectTrigger className="w-[180px]">
    //                 <SelectValue placeholder={placeholder}>
    //                     {selectedValue.join(', ')}
    //                 </SelectValue>
    //             </SelectTrigger>
    //             <SelectContent>
    //                 {items.map((item) => (
    //                     <SelectItem
    //                         key={item.value}
    //                         value={item.value}
    //                         className="flex items-center"
    //                         onSelect={() => onSelect(item.value)}
    //                     >
    //                         {item.label}
    //                     </SelectItem>
    //                 ))}
    //             </SelectContent>
    //         </Select>
    //     </div>
    // </div>
    // );

    if (isLoadingRole) {
        return <Loading />
    }

    return (
        <div className="flex flex-col">
            {renderItemRow("I'm looking for a role as a", "Software Engineer", roles, selectedRole, handleRoleSelect)}
            {/* {renderItemRow("I want to see jobs at a level of", "Junior", currentLevels)}
            {renderItemRow("I want to work at a company with a size of", "Large", companySizes)}
            {renderItemRow("I want to work in or near", "Phoenix, AZ", citySizes)}
            {renderItemRow("I want to work in industry", "Finance", industryTypes)}
            {renderItemRow("I want a minimum total compensation of", "$200,000", compensationRanges)} */}
        </div>
    );
}
