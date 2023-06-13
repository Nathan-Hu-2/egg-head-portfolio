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
              Hello <span className="text-pink-500">World</span>, I Am Nathan!
            </h1>
            <p className="pt-2 text-base">
              <strong>Here is where I <span className="text-pink-500">document my journey</span> on deciding to do better 🦄<br></br>
                Explore my growing repertoire of <span className="text-pink-500">projects and blogs</span> ✏️</strong>
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
      </section >

      <section className='container p-4 mx-auto my-10 sm:p-0 sm:max-w-4xl w-fit' >
        <div className='flex flex-col justify-center gap-4 mx-auto sm:flex-row w-fit'>
          <div className='flex flex-col justify-between'>
            <Image className="rounded-lg" height={768} width={768} src="/assets/portrait.jpg" alt="" />
          </div>
          <div className='sm:ml-4'>
            <h2 className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
              A <span className="text-pink-500">Little</span> About Me
            </h2>
            <div className="mt-4 ">
              <p>
                My name is Nathan Hu, and youuu are one of the few people to stumble
                across my personal website 🦄
                I am a <span className="text-pink-500">3rd Year Commerce & Computer Science</span> Student at UNSW,
                but that is the boring stuff 😴
                <br></br><br></br>
                More excitingly, <span className="text-pink-500">I am documenting my decision to do better</span>, to take on more challenges and push myself
                to do things that I probably don&apos;t want to do, but know will be memorable and meaningful 😁
                <br></br><br></br>
                <span className="text-pink-500">Check out my blog where I write about startups and personal challenges</span> (Like the time I didn&apos;t eat for 10-days☕) as well as my projects!
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
          <p>
            Since I do computer science, I am automatically meant to have a few <span className="text-pink-500">personal projects</span> under my belt 🥋
            Below are a some of the projects that I am proud of 😁
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
            Here are some of my more interesting blogs 😘
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
