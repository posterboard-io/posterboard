import Link from "next/link";


export default function Hero() {
    return (
        <div className="w-full flex justify-center h-16 py-10">
            <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
                The best way to find
                {/* TODO: Fix this */}
                <br />
                jobs in
                <span className="text-blue-600">{" "}tech</span>
                .
              </h1>
        </div>
    )
}