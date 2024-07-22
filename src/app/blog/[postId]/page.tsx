import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "@/icons";
import getFormattedDate from "@/lib/getFormattedDate";

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return (await posts).map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = await getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = await getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="flex flex-col gap-[21px] justify-center items-center max-[450px]:w-full max-[450px]:max-w-[450px] max-w-[1440px] min-h-screen p-24 mb-10">
      <div className="w-[900px] items-center justify-center flex flex-col gap-2.5">
        <div className="flex flex-row w-[900px] items-center justify-between">
          <Link
            href={"/blog"}
            className="w-[134px] h-[36px] rounded-[100px] bg-black/10 flex items-center justify-center gap-2"
          >
            <Icons.Arrow height={20} />
            <p className="font-medium text-sm text-black">Back to Blog</p>
          </Link>
        </div>
        <div className="flex flex-row w-[900px] items-center justify-between mt-10">
          <p className="font-medium text-[12px] text-black/50">{pubDate}</p>
        </div>
        <div className="flex flex-row w-[900px] items-center justify-between">
          <p className="font-bold text-[50px] text-black text-left w-[886px]">{title}</p>
        </div>
        <div className="flex w-[900px] h-[500px] bg-gray-500 rounded-[30px] mt-10"></div>
        <article className="markdown-content w-[900px] mt-10">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </main>
  );
}
