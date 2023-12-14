import { techStacks } from "./tech-stacks"
import { Card, CardContent, CardTitle } from "../ui/card"
import Image from "next/image"
import python from "../../../public/svg/python.svg"

export default function TechStackMappedSVG() {
    return (
        <div className="min-h-screen justify-center items-center flex flex-col">
            <Card>
                <CardTitle>Test</CardTitle>
                <CardContent>
                    <Image 
                        src={python} 
                        alt="Python Logo"
                        width={100} 
                        height={100} 
                    />                    
                </CardContent>
            </Card>
        </div>
    )
}