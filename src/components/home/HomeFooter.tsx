import HomeIcon from './HomeIcon'

export default function HomeFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-foreground/15 px-4 py-6 text-xs text-foreground/75 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <p className="flex items-center gap-2">
        <HomeIcon name="heart" className="size-4" />
        Good food, shared forward.
      </p>
      <p>Common Plate <span aria-hidden="true">↗</span> A little surplus. A lot of possibility.</p>
    </footer>
  )
}
