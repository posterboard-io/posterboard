import posterboardClear from "../../../public/svg/posterboard-clear.svg"
import Image, { StaticImageData } from "next/image"

export default function ClearLogo() {
    const posterboardClearImage: StaticImageData = posterboardClear
    return (
        <div className="flex justify-center">
            <Image 
                src={posterboardClearImage} 
                alt="Posterboard" 
                className="h-12 w-12"
            />
        </div>
    )
}