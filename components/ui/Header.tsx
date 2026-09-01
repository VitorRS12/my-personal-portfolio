// components/Header.tsx
export function Header() {
  return (
     <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-text-primary">EV</span>
      </div>
    </header>
  )
}