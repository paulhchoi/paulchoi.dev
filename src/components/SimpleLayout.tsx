import { Container } from '@/components/Container'

export function SimpleLayout({
  id,
  title,
  intro,
  children,
}: {
  id: string
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container id={id} className="sm:mt-18 mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
