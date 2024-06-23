import React from "react";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import InnerPageHeader from "@/components/InnerPageHeader";
import Image from "next/image";

const getPosts = async () => {
  const hygraph = new GraphQLClient(
    "https://eu-west-2.cdn.hygraph.com/content/clx9cap2107q307t85n1cq5cj/master"
  );

  const { posts } = await hygraph.request(
    `{
      posts(first: 10) {
        id
        slug
        title
        publishedAt
        featuredImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
        excerpt
        updatedAt
      
      }
    }`
  );

  return posts;
};

export function generateMetadata() {
  return { title: "Posts" };
}

export default async function page() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <InnerPageHeader title='Blog / Recent Posts' />

      <section
        id='blog'
        className='mx-auto max-w-screen-xl  px-20 py-20 max-xl:px-10 max-sm:px-5'
      >
        <div className='grid grid-cols-6  gap-10 '>
          <div className='col-span-4 px-10 py-10'>
            {posts.map((post) => (
              <div
                key={post.id}
                className='flex flex-col py-5 px-5'
              >
                <div className='relative w-full h-[350px]'>
                  <Image
                    src={post.featuredImage.url}
                    alt={post.slug}
                    fill
                    className='rounded-md object-cover'
                  />
                </div>
                <h3 className='mt-5 max-md:text-xl max-md:mb-3 mb-5 max-xl:text-3xl max-lg:text-2xl text-3xl font-extrabold tracking-tight z-10 text-clip dark:text-white'>
                  {post.title}
                </h3>
                <div className='flex items-center gap-3 py-5 w-full border-b-4 border-b-mycolor2-50'>
                  <Image
                    src={post.author.photo.url}
                    alt='Author Pic'
                    height={50}
                    width={50}
                    className='rounded-full'
                  />
                  <div className='flex flex-col'>
                    <p className='text-sm text-black dark:text-white'>{post.author.name}</p>
                    <p className='text-sm text-gray-500'>{post.publishedAt}</p>
                  </div>
                </div>
                <p className=' py-6 font-light text-gray-500 max-lg:text-sm leading-7 text-base text-justify'>
                  {post.excerpt}
                </p>
                <div className='py-5'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='text-center mt-8 py-4 px-8 rounded-full bg-mycolor-50 text-white hover:bg-mycolor-50/90 transition ease-in-out duration-500 font-medium'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='col-span-2 px-5 py-5'>
            <h4 className='my-5 max-md:text-base max-md:mb-3 mb-5 max-xl:text-xl max-lg:text-lg text-xl font-extrabold tracking-tight z-10 text-clip'>
              Recent Posts
            </h4>
            <div className='flex gap-3 items-start justify-center'>
              <div className="relative rounded-full h-20 w-40 px- py-0">
              <Image
                src='/wordpress.jpg'
                alt=''
               fill
               className="object-cover rounded-full"
              />
              </div>
              <div className='flex flex-col items-start justify-start'>
                <Link href={"/"} className='text-base font-medium text-black dark:text-white hover:text-mycolor2-50 duration-300 leading-5'>
                  What is the difference between hand coded websites and
                  Wordpress sites?
                </Link>
                <p className='mt-2 text-gray-500 text-sm uppercase'>RYAN POSTELL</p>
                <p className='text-gray-500 text-sm'>MARCH 7, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
