import logoCleanGreen from '@/images/logos/clean-green.png'
import logoHackerOne from '@/images/logos/hackerone.svg'
import logoMetro from '@/images/logos/metro.png'
import logoQvc from '@/images/logos/qvc.png'
import logoSidecar from '@/images/logos/sidecar.svg'
import { IRole } from '@/app/types'
import { ArrowDownIcon, BriefcaseIcon } from './Icons'
import { Button } from './Button'
import Image from 'next/image'

export function Resume() {
  let professional: Array<IRole> = [
    {
      company: 'HackerOne',
      title: 'Software Engineer II',
      logo: logoHackerOne,
      start: 'Jun 2022',
      end: {
        label: 'Aug 2023',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Sidecar / Quartile',
      title: 'Software Engineer II',
      logo: logoSidecar,
      start: 'May 2021',
      end: 'Jun 2022',
    },
    {
      company: 'QVC',
      title: 'Software Engineer',
      logo: logoQvc,
      start: 'Jun 2019',
      end: 'May 2021',
    },
  ]

  let nonprofit: Array<IRole> = [
    {
      company: 'Metro',
      title: 'Director of Digital Tech',
      logo: logoMetro,
      start: 'May 2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Clean & Green Philly',
      title: 'Lead Front-end Engineer',
      logo: logoCleanGreen,
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
        <span className="ml-3">Non-Profit Leadership</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {nonprofit.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <h2 className="mt-6 flex border-t border-zinc-100 pt-6 text-sm font-semibold text-zinc-900 dark:border-zinc-700/40 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional Experience</span>
      </h2>
      <ol className="mt-6 space-y-4 ">
        {professional.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href={'/PaulHChoi_Resume.pdf'}
        variant="secondary"
        className="group mt-8 w-full"
        target={'_blank'}
        rel={'nofollow'}
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Role({ role }: { role: IRole }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-7 w-7 overflow-hidden rounded-full"
          unoptimized
        />
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
