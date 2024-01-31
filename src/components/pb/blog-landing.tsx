import Link from "next/link"
import Image from "next/image"
import { blogConfig, IBlogConfig } from "~/components/pb/blog-config"
import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"

export default function BlogLanding() {

  const lastItem: IBlogConfig = blogConfig.at(0)!

  return (
    <section className="w-full">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          <h3 className="text-md mb-4">The latest from Posterboard.</h3>
          <hr className="" />
          <Card className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Image
                  alt={`${lastItem.postTitle} Image`}
                  className="w-full h-64 object-cover object-center rounded-lg"
                  height="400"
                  src={`${lastItem.postImagePath}`}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">{lastItem.postTitle}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-md py-2">
                  {lastItem.postDescription}
                </p>
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black w-fit py-2">
                  <Link href={lastItem.postURL} prefetch={true}>Read More</Link>
                </Button>
                <div className="flex flex-row space-x-2 py-2">
                  {lastItem.postBadges.map(badgeItem => (
                    <Badge className="py-2 w-fit text-orange-500" variant={"secondary"}>
                      {badgeItem}
                    </Badge>
                  ))}
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm py-2">
                    {lastItem.postAuthor} - {lastItem.postDate}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogConfig.map(posts => (
              <Card className="">
                <div className="items-center justify-center self-center text-center py-2 mb-2">
                  <Image
                    alt={`${lastItem.postTitle} Image`}
                    className="w-full h-64 object-cover object-center rounded-lg"
                    height="400"
                    src={`${lastItem.postImagePath}`}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width="600"
                  />
                  <h3 className="text-xl font-bold mb-2 mt-4">{posts.postTitle}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm py-2">
                    {posts.postDescription}
                  </p>
                  <div className="flex flex-col items-center justify-center py-2">
                    <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black w-fit">
                      <Link href={posts.postURL} prefetch={true}>Read More</Link>
                    </Button>
                    <div className="flex flex-row space-x-2 py-2">
                      {posts.postBadges.map(badgeItem => (
                        <Badge className="py-2 w-fit text-orange-500" variant={"secondary"} >
                          {badgeItem}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs py-2">
                        {posts.postAuthor} - {posts.postDate}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </section>
  )
}

