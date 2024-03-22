import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { LinkIcon, MailIcon } from '@/components/Icons'
import { Resume } from '@/components/Resume'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { SocialLink } from '@/components/SocialLink'
import { Tool, ToolsSection } from '@/components/ToolSection'
import logoCleanGreen from '@/images/logos/clean-green.png'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHackerOne from '@/images/logos/hackerone.svg'
import logoMetro from '@/images/logos/metro.png'
import Image from 'next/image'
import { LINK } from './types'

const projects = [
  {
    name: 'Metrophilly.org',
    description:
      'A site built for a local church using Next.js/React, TypeScript, Tailwind CSS, and Sanity CMS. Initially developed in mid-2019.',
    link: { href: `${LINK.METRO}`, label: 'metrophilly.org' },
    logo: logoMetro,
  },
  {
    name: 'Metro City Hall',
    description:
      'An admin dashboard built for Metro, including features for expense management, departmental budget tracking, and event registration. Initially developed in early 2020.',
    link: { href: `${LINK.CITY_HILL}`, label: 'app.metrophilly.org' },
    logo: logoMetro,
  },
  {
    name: 'Clean & Green Philly',
    description:
      "A civic app run by volunteers that combines several public datasets in order to categorize Philadelphia's vacant properties.",
    link: {
      href: 'https://cleanandgreenphilly.org/',
      label: 'cleanandgreenphilly.org',
    },
    logo: logoCleanGreen,
  },
  {
    name: 'HackerOne',
    description:
      "Developed the core Penetration Testing and Assessments platform, which serves as a bridge between global organizations and the world's largest community of ethical hackers.",
    link: {
      href: 'https://www.hackerone.com/',
      label: 'hackerone.com',
    },
    logo: logoHackerOne,
  },
  {
    name: 'PFC Obershel',
    description:
      'The admin platform built for Genesis Youth Ministries, initially developed in PHP by Ezra Kwak. Development contributions included overhauling the event registration system to accept PayPal payments using their Instant Payment Notification API.',
    link: { href: 'https://pfc.us/obershel', label: 'pfc.us/obershel' },
    logo: logoCosmos,
  },
]

export default function HomePage() {
  return (
    <>
      <Container id="about" className="-mt-16 mb-32 pt-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I&rsquo;m Paul Choi,
              <br />a Software Engineer born and raised in Philadelphia.
            </h1>
            <div className="w-prose mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&rsquo;ve graduated from{' '}
                <a target={'_blank'} rel={'nofollow'} href={LINK.TEMPLE}>
                  Temple University
                </a>{' '}
                in 2019 with a BS in Computer Science and a minor in Data
                Science, and I&rsquo;m currently actively searching for roles as
                a Software Engineer.
              </p>
              <p>
                Since 2016, I&rsquo;ve been the Director of Digital Technologies
                for{' '}
                <a target={'_blank'} rel={'nofollow'} href={LINK.METRO}>
                  Metro Church
                </a>
                , based in Philadelphia, PA where I work with a great team to
                help advance our digital strategies, tools, and experiences
                through data-driven approaches.
              </p>
              <p>
                Every August, you can find me volunteering on the operations and
                tech team for{' '}
                <a target={'_blank'} rel={'nofollow'} href={LINK.PFC}>
                  Pioneers For Christ
                </a>
                , a 2-week long summer camp for elementary-to-high school
                students.
              </p>
              <p>
                Learn more about me by checking out my{' '}
                <a target={'_blank'} rel={'nofollow'} href={LINK.LINKEDIN}>
                  LinkedIn
                </a>
                , or by sending me an{' '}
                <a target={'_blank'} rel={'nofollow'} href={LINK.MAILTO_EMAIL}>
                  email
                </a>
                . I&rsquo;m looking forward to hearing from you!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <Resume />
            <div
              role="list"
              className="mt-12 flex max-w-80 flex-col justify-between gap-6 sm:flex-row sm:flex-wrap lg:ml-6"
            >
              <SocialLink href={LINK.GITHUB} icon={GitHubIcon}>
                GitHub
              </SocialLink>
              <SocialLink href={LINK.LINKEDIN} icon={LinkedInIcon}>
                LinkedIn
              </SocialLink>
              <SocialLink href={LINK.MAILTO_EMAIL} icon={MailIcon}>
                {LINK.EMAIL}
              </SocialLink>
            </div>
          </div>
        </div>
      </Container>
      <SimpleLayout
        id="projects"
        title="Projects."
        intro="These are few of the projects I've worked on over the years. Most of them are closed-source, but if you'd like any clarification, feel free to send me a message."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 overflow-hidden rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  href={project.link.href}
                  target="_blank"
                  rel="nofollow"
                >
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-green-600 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <SimpleLayout
        id="uses"
        title="Things I use."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I&rsquo;ve never heard the fans turn
              on a single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you&rsquo;re working at planetary scale,
              every pixel you can get counts.
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They don&rsquo;t make keyboards the way they used to. I buy these
              any time I see them go up for sale and keep them in storage in
              case I need parts or need to retire my main.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I&rsquo;m going to slouch in the worst ergonomic position
              imaginable all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Sublime Text 4">
              I don&rsquo;t care if it&rsquo;s missing all of the fancy IDE
              features everyone else relies on, Sublime Text is still the best
              text editor ever made.
            </Tool>
            <Tool title="iTerm2">
              I&rsquo;m honestly not even sure what features I get with this
              that aren&rsquo;t just part of the macOS Terminal but it&rsquo;s
              what I use.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it&rsquo;s
              become our virtual whiteboard for the entire company. Never would
              have expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It&rsquo;s not the newest kid on the block but it&rsquo;s still
              the fastest. The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Reflect">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it&rsquo;s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
            <Tool title="Focus">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
