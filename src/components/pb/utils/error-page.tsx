import Link from "next/link"

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Error Page - Oops ¯\_(ツ)_/¯</h1>
      <p>Something went wrong. We&apos;ve been notified and we&apos;re sorry for any inconvenice caused.</p>
      <p>If you can, please open a Issue on GitHub we&apos;d appreciate it!</p>
      <Link 
        href="https://github.com/posterboard-io/posterboard/issues/new"
        passHref={true}
        className="text-blue-500 hover:text-blue-700"
      >
        Open Issue
      </Link>
    </div>
  )
}
