import clsx from 'clsx'
import Link from 'next/link'
import { Button } from '@/components/Button'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import { Section } from '@/components/Section'
import Image, { type ImageProps } from 'next/image'
import { LINK } from './types'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const projects = [
  {
    name: 'Metrophilly.org',
    description:
      'A site built for a local church using Next.js/React, TypeScript, Tailwind CSS, and Sanity CMS. Initially developed in mid-2019.',
    link: { href: `${LINK.METRO}`, label: 'metrophilly.org' },
    logo: logoAnimaginary,
  },
  {
    name: 'Metro City Hall',
    description:
      'An admin dashboard built for Metro, including features for expense management, departmental budget tracking, and event registration. Initially developed in early 2020.',
    link: { href: `${LINK.CITY_HILL}`, label: 'app.metrophilly.org' },
    logo: logoPlanetaria,
  },
  {
    name: 'Clean & Green Philly',
    description:
      "A civic app run by volunteers that combines several public datasets in order to categorize Philadelphia's vacant properties.",
    link: {
      href: 'https://cleanandgreenphilly.org/',
      label: 'cleanandgreenphilly.org',
    },
    logo: logoOpenShuttle,
  },
  {
    name: 'HackerOne',
    description:
      'Something something about their pentesting and assessments portal.',
    link: {
      href: 'https://www.hackerone.com/',
      label: 'hackerone.com',
    },
    logo: logoHelioStream,
  },
  {
    name: 'PFC Obershel',
    description:
      'The admin platform built for Genesis Youth Ministries, initially developed in PHP by Ezra Kwak. Development contributions included overhauling the event registration system to accept PayPal payments using their Instant Payment Notification API.',
    link: { href: 'https://pfc.us/obershel', label: 'pfc.us/obershel' },
    logo: logoCosmos,
  },
]

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-green-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let professional: Array<Role> = [
    {
      company: 'HackerOne',
      title: 'Software Engineer II',
      logo: logoPlanetaria,
      start: 'Jun 2022',
      end: {
        label: 'Aug 2023',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Sidecar / Quartile',
      title: 'Software Engineer II',
      logo: logoAirbnb,
      start: 'May 2021',
      end: 'Jun 2022',
    },
    {
      company: 'QVC',
      title: 'Software Engineer',
      logo: logoFacebook,
      start: 'Jun 2019',
      end: 'May 2021',
    },
  ]

  let nonprofit: Array<Role> = [
    {
      company: 'Metro',
      title: 'Director of Digital Tech',
      logo: logoPlanetaria,
      start: 'May 2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Clean & Green Philly',
      title: 'Lead Front-end Engineer',
      logo: logoAirbnb,
      start: 'Mar 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {professional.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <h2 className="mt-6 flex border-t border-zinc-100 pt-6 text-sm font-semibold text-zinc-900 dark:border-zinc-700/40 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Non-Profit Leadership</span>
      </h2>
      <ol className="mt-6 space-y-4 ">
        {nonprofit.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href={'/PaulHChoi_Resume.pdf'}
        variant="secondary"
        className="group mt-8 w-full"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default function Page() {
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
                <a href={LINK.TEMPLE}>Temple University</a> in 2019 with a BS in
                Computer Science and a minor in Data Science, and I&rsquo;m
                currently actively searching for roles as a Software Engineer.
              </p>
              <p>
                Since 2016, I&rsquo;ve been the Director of Digital Technologies
                for <a href={LINK.METRO}>Metro Church</a>, based in
                Philadelphia, PA where I work with a great team to help advance
                our digital strategies, tools, and experiences through
                data-driven approaches.
              </p>
              <p>
                Every August, you can find me volunteering on the operations and
                tech team for <a href={LINK.PFC}>Pioneers For Christ</a>, a
                2-week long summer camp for elementary-to-high school students.
              </p>
              <p>
                Learn more about me by checking out my{' '}
                <a href={LINK.LINKEDIN}>LinkedIn</a>, or by sending me an{' '}
                <a href={LINK.MAILTO_EMAIL}>email</a>. I&rsquo;m looking forward
                to hearing from you!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <Resume />
            <ul role="list" className="mt-20 lg:ml-6">
              <SocialLink href={LINK.GITHUB} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={LINK.LINKEDIN}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={LINK.MAILTO_EMAIL}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {LINK.EMAIL}
              </SocialLink>
            </ul>
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
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
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
