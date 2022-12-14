import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { sanityClient, builder } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {
  console.log(posts);

  return (
    <>
      <div className="max-w-7xl mx-auto pb-10">
        <Head>
          <title>The Mars Logbook</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className="flex gap-10 items-center justify-between bg-yellow-400 border-y border-black py-10 px-5 lg:px-16 lg:py-10">
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-6xl max-w-xl font-serif">
              If <span className="underline decoration-2">things</span> are one
              way, it doesn't mean they can't be{" "}
              <span className="underline decoration-2">changed</span>.
            </h1>
            <h2>
              It's easy and free to post your thinking on any topic and connect
              with millions of readers.
            </h2>
          </div>
          <img
            className="hidden md:inline-flex h-72"
            src="img/logo.png"
            alt="logo"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 
                transition-transform duration-200 ease-in-out"
                  src={builder.image(post.mainImage).url()!}
                  alt="post-image"
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">
                      {post.description} by {post.author.name}
                    </p>
                  </div>

                  <img
                    className="h-12 w-12 rounded-full"
                    src={builder.image(post.author.image).url()!}
                    alt="author-image"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] {
    _id,
    title,
    slug,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
