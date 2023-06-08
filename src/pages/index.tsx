import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import type { PostType, ProjectType } from '../../types/post'
import PostCard from '../components/PostCard'
import ProjectCard from '../components/ProjectCard'
import { getFeaturedPosts, getProjectPosts } from '../utils/posts'




const Home: NextPage<{ posts: PostType[], projects: ProjectType[] }> = ({ posts, projects }) => {
  return (
    <>
      <section
        className='flex items-center justify-center h-[85vh]'
      >
        <div className='flex flex-row items-center'>
          <div className="m-4 sm:ml-4">
            <h1 className="text-3xl font-bold sm:text-6xl">
              Hello World, I Am Nathan!
            </h1>
            <p className="pt-2 text-base">
              <strong>Here is where I document my journey on deciding to do better 🦄<br></br>
                Explore my growing repertoire of projects and blogs ✏️</strong>
            </p>
            <div role="list" className="flex flex-row gap-2 mt-6 align-middle">
              <a
                href="https://github.com/Nathan-Hu-2" target="_blank" rel="noopener noreferrer"
                className="rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                <Image
                  src="/assets/github.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nathan-hu-0284511b0/" target="_blank" rel="noopener noreferrer"
                className="rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                <Image
                  src="/assets/linkedin.svg"
                  alt="linked in"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='container p-4 mx-auto my-10 sm:p-0 sm:max-w-4xl w-fit' >
        <div className='flex flex-col justify-center gap-4 mx-auto sm:flex-row w-fit'>
          <div className='flex flex-col justify-between'>
            <Image className="rounded-lg" height={768} width={768} src="/assets/portrait.jpg" alt="" />
          </div>
          <div className='sm:ml-4'>
            <h2 className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
              A Little About Me
            </h2>
            <div className="mt-4 ">
              <p>
                I am Nathan Hu a 3rd Year Commerce & Computer Science Student at UNSW 💡.
              </p>
              <p className='mt-2'>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='container p-4 mx-auto mt-20 sm:p-0 sm:max-w-4xl w-fit' >
        <Link href="/projects">
          <a className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
            Projects
          </a>
        </Link>
        <div className="mt-4 w-96 sm:w-auto">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-4 mx-auto mt-6 md:grid-cols-2 w-fit'>
          {projects.map((project) => {
            return <ProjectCard project={project} key={project.slug} />
          })}
        </div>
      </section>
      <section className='container p-4 mx-auto mt-20 sm:p-0 sm:max-w-4xl w-fit' >
        <Link href="/blog">
          <a className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
            Blog 🚀
          </a>
        </Link>
        <div className="mt-4 w-96 sm:w-auto">
          <p>
            Here are some of my featured blogs! If you want to read about some awesome early stage startups, tech and my experience with fasting for 10 days, check the top right!
          </p>
          {/* <p className='mt-2'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
          </p> */}
        </div>
        <div>
          <div className='flex items-center justify-center'>
          </div>
          <div className='mt-6'>
            {posts.map((post) => {
              return (
                <PostCard key={post.slug} post={post} />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {

  const posts = getFeaturedPosts(['slug', 'title', 'tags', 'date', 'summary'])
  const projects = getProjectPosts(['slug', 'title', 'tags', 'date', 'summary', 'images', 'details'])

  return {
    props: {
      posts,
      projects
    }
  }
}

export default Home
