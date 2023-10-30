import Link from "next/link"

export default function ByePage() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">        
            <p className="text-xl font-bold ">You have been logged out.</p>                           
            <Link href="/" className=" hover:underline">
                Return to home page
            </Link>
        </div>
    )
}