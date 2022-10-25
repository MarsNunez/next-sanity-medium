import { GetStaticProps } from "next";
import Header from "../../components/Header";
import { sanityClient, builder } from "../../sanity";
import { Post } from "../../typings";
import PortableText from "react-portable-text";

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  return (
    <main>
      <Header />

      <img
        className="w-full h-40 object-cover"
        src={builder.image(post.mainImage).url()!}
        alt="header-image"
      />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500">{post.description}</h2>
        <div className="flex items-center space-x-3 mt-3">
          <img
            className="h-10 w-10 rounded-full"
            src={builder.image(post.author.image).url()}
            alt="author-image"
          />
          <p className="font-extralight text-sm">
            Blog post by{" "}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        <div className="mt-8">
          <PortableText
            className="mt-5"
            dataset={process.env.PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-5" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="text-xl font-bold my-5" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
          {post.fdescription && post.fimage && (
            <div className="flex flex-col items-center mt-7">
              <img
                className="h-2/3 w-4/6 object-cover"
                src={builder.image(post.fimage.asset).url()}
                alt="author-image"
              />
              <p className=" mt-2 font-extralight text-sm text-gray-500">
                {post.fdescription}
              </p>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post'] {
    _id,
    slug{
      current
    }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    author-> {
      name,
      image,
    },
    description,
    mainImage,
    slug,
    body,
    fimage,
    fdescription
  }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, //After 60 seconds, it'll update the old cached version
  };
};
