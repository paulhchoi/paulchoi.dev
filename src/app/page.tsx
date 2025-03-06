import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { LinkIcon, MailIcon } from '@/components/Icons'
import { Resume } from '@/components/Resume'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { SocialLink } from '@/components/SocialLink'
import { Tool, ToolsSection } from '@/components/ToolSection'
import logoCleanGreen from '@/images/logos/clean-green.png'
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
    name: 'Clean & Green Philly',
    description:
      "A civic app run by volunteers that combines several public datasets in order to categorize Philadelphia's vacant properties.",
    link: {
      href: `${LINK.CLEANGREEN}`,
      label: 'cleanandgreenphilly.org',
    },
    logo: logoCleanGreen,
  },
  {
    name: 'HackerOne',
    description:
      "Developed the core Penetration Testing and Assessments platform, which serves as a bridge between global organizations and the world's largest community of ethical hackers.",
    link: {
      href: `${LINK.HACKERONE}`,
      label: 'hackerone.com',
    },
    logo: logoHackerOne,
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
                Since 2019, I&rsquo;ve been the Director of Digital Technologies
                for{' '}
                <a target={'_blank'} rel={'nofollow'} href={LINK.METRO}>
                  Metro Church
                </a>
                , based in Philadelphia, PA where I work with a great team to
                help advance our digital strategies, tools, and experiences
                through data-driven approaches.
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
        intro="Inspired by WesBos, this is a quick list of daily drivers and things that make my life just a bit easier."
      >
        <div className="space-y-20">
          <ToolsSection title="Coding">
            <Tool title="Editor: Visual Studio Code" />
            <Tool title="Theme: Monakai Pro" />
            <Tool title="Terminal: iTerm 2 (zsh & power10k)" />
          </ToolsSection>

          <ToolsSection title="Productivity">
            <Tool title="Personal Tasks: OmniFocus" />
            <Tool title="Team Project Management: Trello & GitHub Projects" />
            <Tool title="Persistent Notes: Apple Notes & Obsidian" />
          </ToolsSection>

          <ToolsSection title="Computer / Office">
            <Tool title='16" MacBook Pro (2021)' />
            <Tool title="Lily58 split mechanical keyboard w/ Zelios V2 switches" />
            <Tool title="Logitech MX Master 3 Mouse" />
            <Tool title="IKEA Jerker desk" />
            <Tool title="Ergodriven Topo standing mat" />
            <Tool title="Plants on plants on plants" />
          </ToolsSection>

          <ToolsSection title="Privacy">
            <Tool title="1Password & YubiKeys" />
            <Tool title="Firefox w/ DuckDuckGo" />
            <Tool title="ProtonMail & AnonAddy" />
            <Tool title="NextDNS & ProtonVPN" />
            <Tool title="Signal" />
          </ToolsSection>

          <ToolsSection title="Other Software">
            <Tool title="Sublime Text" />
            <Tool title="Raycast" />
            <Tool title="Rectangle" />
            <Tool title="Fantastical" />
            <Tool title="Thunderbird" />
            <Tool title="Figma" />
            <Tool title="Canva" />
          </ToolsSection>

          <ToolsSection title="Other Tech">
            {[
              'Apple AirPods Pro',
              'Blue Yeti microphone',
              'Razor Kiyo webcam',
              'Samsung T5 1TB external SSD',
              'Creality Ender 3 3D printer',
            ].map((t, index) => (
              <Tool key={index} title={t} />
            ))}
          </ToolsSection>

          <ToolsSection title="Browser Extensions">
            {[
              'Vimium',
              'Temporary Containers',
              'uBlock Origin',
              'Decentraleyes',
              'HTTPS Everywhere',
            ].map((t, index) => (
              <Tool key={index} title={t} />
            ))}
          </ToolsSection>

          <ToolsSection title="Current">
            {[
              'Reading: Moonwalking with Einstein by Joshua Foer',
              'Reading: Thinking, Fast and Slow by Daniel Kahneman',
              'Board Game: Avalon',
            ].map((t, index) => (
              <Tool key={index} title={t} />
            ))}
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
