import Link from "next/link"

export default function SomePrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
            <div className="w-full sm:w-auto mb-4 sm:mb-0 flex justify-between items-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Privacy Policy
                </h1>
                <p className="text-sm sm:text-base mb-4 sm:mb-0 px-2">Posterboard.io - {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}