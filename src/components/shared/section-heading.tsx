interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center = false }: SectionHeadingProps) {
  return (
    <header className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">{description}</p>
    </header>
  );
}
