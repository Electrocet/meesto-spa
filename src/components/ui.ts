export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-moss px-6 py-3 " + // deslop-ignore 19 — пилюли по дизайн-системе
  "text-sm font-semibold text-paper transition-[background-color,transform] duration-200 " +
  "hover:bg-moss-light active:scale-[0.98]";

export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink px-6 py-3 " + // deslop-ignore 19 — пилюли по дизайн-системе
  "text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink/[0.06]";

export const inputBase =
  "w-full rounded-field border bg-paper px-4 py-3 text-[0.9375rem] text-ink " +
  "placeholder:text-ink-soft/60 transition-colors duration-150 " +
  "focus:border-moss focus:outline-none focus:ring-2 focus:ring-moss/20";

export const inputOk = "border-line";
export const inputError = "border-error";
