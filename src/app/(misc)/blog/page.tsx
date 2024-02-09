import BlogLanding from "~/components/pb/blog-landing";
import { api } from "~/trpc/react";

export default function BlogPage() {

  return (
    <div className="flex flex-col justify-center items-center">
      <BlogLanding />
    </div>
  )
}


