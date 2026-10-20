import { btnPrimary } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#" className="font-display text-2xl font-semibold tracking-tight text-ink">
          Место&nbsp;SPA
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <a className="transition-colors duration-150 hover:text-ink" href="#programs">
            Программы
          </a>
          <a className="transition-colors duration-150 hover:text-ink" href="#application">
            Заявка
          </a>
        </nav>
        <div className="hidden md:block">
          <a href="#application" className={`${btnPrimary} px-5 py-2.5`}>
            Оставить заявку
          </a>
        </div>
        <div className="md:hidden">
          <a href="#application" className={`${btnPrimary} min-h-11 px-4 text-xs`}>
            Заявка
          </a>
        </div>
      </div>
    </header>
  );
}
