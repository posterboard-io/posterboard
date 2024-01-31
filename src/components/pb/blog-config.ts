
export interface IBlogConfig {
  postID: string;
  postTitle: string;
  postDescription: string;
  postDate: string;
  postImagePath: string;
  postURL: string;
  postMDXFile: string;
  postAuthor: string;
  postLength: string;
  postBadges: string[];
}

export const blogConfig: IBlogConfig[] = [
  {
    postID: "1",
    postTitle: "What Is Posterboard?",
    postDescription: "Why the hell did you build this?",
    postDate: "1/30/2024",
    postImagePath: "/png/posterboard.png",
    postURL: "/blog/1",
    postMDXFile: "/mdx/blog/1",
    postAuthor: "Tyler Kruer",
    postLength: "3 min read",
    postBadges: ["News", "About"]
  },
  {
    postID: "2",
    postTitle: "The Impending Doom Of Applying To Jobs",
    postDescription: "Why does every entry level job require 2-3 years of experience?",
    postDate: "January 30, 2024",
    postImagePath: "/png/posterboard.png",
    postURL: "/blog/1",
    postMDXFile: "/mdx/blog/2",
    postAuthor: "Tyler Kruer",
    postLength: "3 min read",
    postBadges: ["News", "Features"]
  },
]


