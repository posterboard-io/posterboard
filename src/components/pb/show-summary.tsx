
import { RoleData } from '~/types/types'


export default function ShowRoleSummary({ roleData }: { roleData: RoleData }) {
    const { roleType, roleLevel, rolesCity, rolesCompanySizes, roleCompensationRanges, roleIndustryTypes } = roleData
    return (
        <div className="flex flex-col">
            <p>
                Great - you&apos;re looking for a {roleType.join(', ')} role at the {roleLevel.join(', ')} level.
            </p>
            <p>
                You&apos;re interested in working in {rolesCity.join(', ')}.
            </p>
            <p>
                You&apos;re looking for a company with {rolesCompanySizes.join(', ')} employees.
            </p>
            <p>
                You&apos;re looking for a company in the {roleIndustryTypes.join(', ')} industry.
            </p>
            <p>
                You&apos;re looking for a company that pays {roleCompensationRanges.join(', ')}.
            </p>
        </div>
    )
}