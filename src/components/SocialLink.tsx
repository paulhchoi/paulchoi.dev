import clsx from 'clsx'
import Link from 'next/link'

export function SocialLink({
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
        target={'_blank'}
        rel={'nofollow'}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-green-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
