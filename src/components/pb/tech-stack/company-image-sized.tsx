import Image from 'next/image'
import microsoftImage from '~/../public/svg/companies/microsoft.svg'
import netflixImage from '~/../public/svg/companies/netflix.svg'
import nvidiaImage from '~/../public/svg/companies/nvidia.svg'

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

    if (company === "Nvidia") {
        return (
            <div className="w-8 h-8 relative">
                <Image
                    // className="object-contain"
                    src={nvidiaImage}
                    alt={company}
                    // layout="fill"
                    // loading="lazy"
                    height={600}
                    width={600}
                />
            </div>
        )
    }

    if (company === "Netflix") {
        return (
            <div className="w-8 h-8 relative">
                <Image
                    // className="object-contain"
                    src={netflixImage}
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