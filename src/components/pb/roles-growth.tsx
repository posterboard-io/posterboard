"use client"

import React, { useState } from "react"

import { cn } from "~/lib/utils"
import { roles, currentLevels, companySizes, citySizes, compensationRanges, industryTypes } from "~/components/pb/tech-stacks"
import { Button } from "~/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select"
import ShowRoleSummary from "~/components/pb/show-summary"
   


export default function RolesAndGrowth() {

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
                <div className="flex flex-row items-center justify-between text-lg font-normal py-2">
                    <div className="w-2/3">
                    <p>
                        I&apos;m looking for a role as a
                    </p>
                    </div>
                    <div className="w-1/3">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Software Engineer" />
                        </SelectTrigger>
                        <SelectContent>
                        {roles.map((role) => (
                            <SelectItem
                                key={role.value}
                                value={role.value}
                                className="flex items-center"
                            >
                                {role.label}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between text-lg font-normal py-2">
                    <div className="w-2/3">
                    <p>
                        I want to see jobs at a level of 
                    </p>
                    </div>
                    <div className="w-1/3">
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Junior" />
                    </SelectTrigger>
                    <SelectContent>
                        {currentLevels.map((currentLevels) => (
                            <SelectItem
                                key={currentLevels.value}
                                value={currentLevels.value}
                                className="flex items-center"
                            >
                                {currentLevels.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between text-lg font-normal py-2">
                    <div className="w-2/3">
                    <p>
                        I want to work at a company with a size of
                    </p>
                    </div>
                    <div className="w-1/3">
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Large" />
                    </SelectTrigger>
                    <SelectContent>
                        {companySizes.map((companySizes) => (
                            <SelectItem
                                key={companySizes.value}
                                value={companySizes.value}
                                className="flex items-center"
                            >
                                {companySizes.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between text-lg font-normal py-2">
                    <div className="w-2/3">
                    <p>
                        I want to work in or near
                    </p>
                    </div>
                    <div className="w-1/3">
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Phoenix, AZ" />
                    </SelectTrigger>
                    <SelectContent>
                        {citySizes.map((citySizes) => (
                            <SelectItem
                                key={citySizes.value}
                                value={citySizes.value}
                                className="flex items-center"
                            >
                                {citySizes.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between text-lg font-normal py-2">
                    <div className="w-2/3">
                    <p>
                        I want to work in industry
                    </p>
                    </div>
                    <div className="w-1/3">
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Finance" />
                    </SelectTrigger>
                    <SelectContent>
                        {industryTypes.map((industryTypes) => (
                            <SelectItem
                                key={industryTypes.value}
                                value={industryTypes.value}
                                className="flex items-center"
                            >
                                {industryTypes.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between text-lg font-normal py-2">
                    <div className="w-2/3">
                    <p>
                        I want a minimum total compensation of
                    </p>
                    </div>
                    <div className="w-1/3">
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="$200,000" />
                    </SelectTrigger>
                    <SelectContent>
                        {compensationRanges.map((compensationRanges) => (
                            <SelectItem
                                key={compensationRanges.value}
                                value={compensationRanges.value}
                                className="flex items-center"
                            >
                                {compensationRanges.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                    </div>
                </div>
            </div>
            <div className="w-1/2"> {/* Adjust width here */}
                <ShowRoleSummary roleData={{
                    roleType: ["Software Engineer"],
                    roleLevel: ["Junior"],
                    rolesCity: ["Phoenix, AZ"],
                    rolesCompanySizes: ["Large"],
                    roleCompensationRanges: ["$200,000"],
                    roleIndustryTypes: ["Finance"],
                }} />
            </div>
        </div>
    );
}