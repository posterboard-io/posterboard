import Image from 'next/image'
import microsoftImage from '~/../public/svg/companies/microsoft.svg'

export default function CompanyImageSizedRight({ company }: { company: string }) {    
    if (company === "Microsoft") {
        return (
            <div className="w-8 h-8 relative">
                <Image
                    // className="object-contain"
                    src={microsoftImage}
                    alt={company}
                    // layout="fill"
                    // loading="lazy"
                    height={600}
                    width={600}
                />
            </div>
        )
    }

    return (
        <div className="w-8 h-8 relative">
            <Image
                className="object-contain"
                src={company}
                alt={company}
                layout="fill"
                loading="lazy"
            />
        </div>
    )
}