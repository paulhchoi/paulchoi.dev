import { Card } from './Card'
import { Section } from './Section'

export function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-4">
        {children}
      </ul>
    </Section>
  )
}

export function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children?: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {children && <Card.Description>{children}</Card.Description>}
    </Card>
  )
}
