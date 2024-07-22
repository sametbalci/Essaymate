import React from "react";
import * as Icons from "@/icons";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

const Page = async () => {
  const posts = await getSortedPostsData();
  const latestPost = posts[0];

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex flex-col gap-[10px] justify-center items-center max-[450px]:w-full max-[450px]:max-w-[450px] max-w-[1096px] w-[1096px] min-h-screen p-24">
        <div className="flex items-center justify-between w-[1096px]">
          <p className="font-medium text-black text-[12px]">Essaymate Blog</p>
        </div>
        <div className="flex items-center justify-between w-[1096px]">
          <p className="font-bold text-black text-[50px] w-[775px]">
            Check out the latest insights on Dash and AI at work
          </p>
        </div>
        <div className="flex items-center justify-between w-[1096px] mt-10">
          <Icons.Line />
        </div>
        <div className="flex items-center justify-between w-[1096px] mt-10 max-[450px]:hidden">
          <div className="flex items-center flex-row gap-[50px]">
            <div className="w-[554px] h-[330px] rounded-[30px] bg-gray-600"></div>
            {latestPost && (
              <div className="flex flex-col gap-5 items-center justify-center w-[366px] h-[278px] mt-10">
                <p className="font-semibold text-[30px] text-black mr-auto">
                  {latestPost.title}
                </p>
                <p className="font-[500] text-base text-black font-nanum mr-auto">
                  {latestPost.latestExcerpt}
                </p>
                <Link href={`/blog/${latestPost.id}`} className="mr-auto hover:border-b hover:border-b-black transition duration-200">
                  <p className="font-medium text-[12px] text-black mt-5 mr-auto cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 items-center justify-center w-[1096px] mt-[90px] gap-[50px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-2.5 w-[332px] h-[400px]"
            >
              <div className="w-[332px] h-[198px] rounded-[20px] bg-gray-500"></div>
              <div className="w-[332px] h-[182px] flex flex-col gap-2.5 items-center justify-center mr-auto">
                <p className="font-medium text-[12px] text-black/50 mr-auto">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="font-medium text-black text-xl mr-auto">
                  {post.title}
                </p>
                <p className="font-nanum font-medium text-base text-black mr-auto">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="font-medium text-[12px] text-black mt-5 mr-auto cursor-pointer hover:border-b hover:border-b-black transition duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-[6px] justify-center items-center w-[174px] h-[32px]">
          <div className="w-[28px] h-[32px] rounded-[4px] bg-black items-center justify-center flex cursor-pointer">
            <p className="font-medium text-base text-white">1</p>
          </div>
          <div className="w-[30px] h-[32px] rounded-[4px] bg-black/10 items-center justify-center flex cursor-pointer">
            <p className="font-medium text-base text-black">2</p>
          </div>
          <div className="w-[31px] h-[32px] rounded-[4px] bg-black/10 items-center justify-center flex cursor-pointer">
            <p className="font-medium text-base text-black">3</p>
          </div>
          <div className="w-[31px] h-[32px] rounded-[4px] bg-black/10 items-center justify-center flex cursor-pointer">
            <p className="font-medium text-base text-black">4</p>
          </div>
          <div className="w-[30px] h-[32px] rounded-[4px] bg-black/10 items-center justify-center flex cursor-pointer">
            <p className="font-medium text-base text-black">5</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
