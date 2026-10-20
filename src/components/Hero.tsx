import { IconArrow } from "./icons";
import { btnPrimary } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-6">
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-balance text-center lg:text-left">
            Отдохните по&#8209;настоящему&nbsp;— за один вечер
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-ink-soft md:text-xl lg:mx-0 lg:text-left">
            Три авторские SPA-программы в центре Москвы. Выберите подходящую и оставьте
            заявку&nbsp;— подтвердим время в течение часа.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <a href="#programs" className={btnPrimary}>
              Выбрать программу
              <IconArrow className="size-4" />
            </a>
            <span className="text-sm text-ink-soft">Заявка занимает меньше минуты</span>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-card bg-line shadow-card">
            <img
              src="/img/hero.jpg"
              alt="Тёплая сауна с деревянными полками, камнями и мягким светом"
              className="aspect-[4/5] w-full object-cover"
              width={960}
              height={1200}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
