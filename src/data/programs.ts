export type ProgramId = "reset" | "deep" | "duo";

export interface Program {
  id: ProgramId;
  name: string;
  duration: string;
  price: number;
  description: string;
  badge?: string;
  featured?: boolean;
}

export const programs: Program[] = [
  {
    id: "reset",
    name: "Перезагрузка",
    duration: "60 минут",
    price: 3500,
    description: "Быстрый сброс: хаммам, контрастный бассейн и расслабляющий массаж спины.",
    badge: "Сброс за час",
  },
  {
    id: "deep",
    name: "Глубокий отдых",
    duration: "90 минут",
    price: 5000,
    description: "Полный ритуал: сауна, пилинг, массаж всего тела и чайная пауза.",
    badge: "Выбор гостей",
    featured: true,
  },
  {
    id: "duo",
    name: "Для двоих",
    duration: "120 минут",
    price: 9000,
    description: "Совместный отдых: парная для двоих, массаж и закуски в приватной комнате.",
    badge: "Вдвоём теплее",
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ru-RU")} ₽`;
}
