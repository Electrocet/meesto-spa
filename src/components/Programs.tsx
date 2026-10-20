import { formatPrice, programs, type Program } from "../data/programs";
import { IconCheck, IconClock, IconDuo, IconSauna, IconSteam } from "./icons";
import { btnPrimary } from "./ui";

const icons: Record<Program["id"], typeof IconSteam> = {
  reset: IconSteam,
  deep: IconSauna,
  duo: IconDuo,
};

interface Props {
  onChoose: (id: string) => void;
}

export function Programs({ onChoose }: Props) {
  return (
    <section id="programs" className="scroll-mt-24 border-t border-line/70 py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.005em]">
            Три способа восстановиться
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Выберите программу&nbsp;— мы подтвердим свободное время и детали.
          </p>
        </div>

        {/* deslop-ignore-next-line 28 — ровно три программы из ТЗ */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
          {programs.map((program) => {
            const Icon = icons[program.id];
            return (
              <article
                key={program.id}
                className={
                  "relative flex flex-col rounded-card bg-surface p-7 text-center shadow-card " +
                  "transition-shadow duration-200 hover:shadow-card-hover md:text-left " +
                  (program.featured
                    ? "border-[1.5px] border-moss md:-mt-4 md:mb-4"
                    : "border border-line")
                }
              >
                {program.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-moss px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.12em] text-paper uppercase md:left-7 md:translate-x-0">{/* deslop-ignore 19 — бейдж-пилюли по дизайн-системе */}{program.badge}</span>
                )}
                <Icon className="mx-auto size-12 text-moss md:mx-0" />
                <h3 className="mt-5 font-display text-2xl font-semibold">{program.name}</h3>
                <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-ink-soft uppercase md:justify-start">
                  <IconClock className="size-3.5" />
                  {program.duration}
                </p>
                <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {program.description}
                </p>
                <p className="mt-6 text-2xl font-bold tabular-nums">{formatPrice(program.price)}</p>
                <button
                  type="button"
                  onClick={() => onChoose(program.id)}
                  className={`${btnPrimary} mt-5 self-center px-8 md:w-full`}
                >
                  Выбрать программу
                </button>
              </article>
            );
          })}
        </div>

        {/* deslop-ignore-next-line 28 — три преимущества, не стат-плитки */}
        <ul className="mt-14 grid gap-x-8 gap-y-5 border-t border-line pt-10 sm:grid-cols-3">
          {[
            ["5 минут от метро", "Тверская, вход со двора — тишина прямо от двери"],
            ["Чай после процедуры", "Травяной сбор и вода включены в каждую программу"],
            ["Приватные зоны", "Отдельная комната на двоих, без общих раздевалок"],
          ].map(([title, text]) => (
            <li
              key={title}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left"
            >
              <IconCheck className="mt-0.5 size-5 shrink-0 text-moss" />
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
