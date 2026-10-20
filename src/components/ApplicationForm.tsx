import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { formatPrice, programs } from "../data/programs";
import { formatDateRu, saveApplication, type Application } from "../lib/storage";
import { toIsoDate, validateForm, type FormErrors, type FormValues } from "../lib/validation";
import { IconAlert, IconCheck } from "./icons";
import { btnGhost, btnPrimary, inputBase, inputError, inputOk } from "./ui";

interface SectionProps {
  selectedProgramId: string;
  onProgramIdChange: (id: string) => void;
  restored: Application | null;
}

export function ApplicationSection({
  selectedProgramId,
  onProgramIdChange,
  restored,
}: SectionProps) {
  return (
    <section id="application" className="scroll-mt-24 border-t border-line/70 py-16 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="text-center lg:col-span-5 lg:text-left">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.005em]">
            Оставьте заявку
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Заполните три поля&nbsp;— подтвердим время и ответим на вопросы в течение
            часа.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-soft">
            <li>Оплата на месте: наличными или картой</li>
            <li>Можно перенести запись без предоплаты</li>
            <li>Подарочный сертификат — по запросу</li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <ApplicationCard
            selectedProgramId={selectedProgramId}
            onProgramIdChange={onProgramIdChange}
            restored={restored}
          />
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  selectedProgramId: string;
  onProgramIdChange: (id: string) => void;
  restored: Application | null;
}

function ApplicationCard({ selectedProgramId, onProgramIdChange, restored }: CardProps) {
  const [values, setValues] = useState<FormValues>({ name: "", programId: "", date: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<Application | null>(restored);
  const [wasRestored, setWasRestored] = useState(restored !== null);
  const today = toIsoDate(new Date());

  useEffect(() => {
    if (selectedProgramId) {
      setValues((v) => ({ ...v, programId: selectedProgramId }));
      setErrors((e) => ({ ...e, programId: undefined }));
    }
  }, [selectedProgramId]);

  function clearError(field: keyof FormValues) {
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const found = validateForm(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstField = (["name", "programId", "date"] as const).find((f) => found[f]);
      if (firstField) {
        document.getElementById(firstField)?.focus();
      }
      return;
    }
    const record = saveApplication({
      name: values.name,
      programId: values.programId,
      date: values.date,
    });
    setSubmitted(record);
    setWasRestored(false);
  }

  function handleAgain() {
    setSubmitted(null);
    setWasRestored(false);
    setValues({ name: "", programId: "", date: "" });
    setErrors({});
    onProgramIdChange("");
  }

  if (submitted) {
    return (
      <Confirmation
        application={submitted}
        restored={wasRestored}
        onAgain={handleAgain}
      />
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-card border border-line bg-surface p-6 shadow-card md:p-8"
    >
      <Field label="Имя" error={errors.name} htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Как к вам обращаться"
          value={values.name}
          onChange={(e) => {
            setValues((v) => ({ ...v, name: e.target.value }));
            clearError("name");
          }}
          aria-invalid={errors.name ? true : undefined}
          className={`${inputBase} ${errors.name ? inputError : inputOk}`}
        />
      </Field>

      <Field label="Программа" error={errors.programId} htmlFor="programId">
        <div className="relative">
          <select
            id="programId"
            name="programId"
            value={values.programId}
            onChange={(e) => {
              setValues((v) => ({ ...v, programId: e.target.value }));
              clearError("programId");
            }}
            aria-invalid={errors.programId ? true : undefined}
            className={`${inputBase} appearance-none pr-10 ${errors.programId ? inputError : inputOk} ${
              values.programId ? "" : "text-ink-soft/70"
            }`}
          >
            <option value="">Выберите программу</option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.duration}, {formatPrice(p.price)}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-soft"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 7.5 5 5 5-5" />
          </svg>
        </div>
      </Field>

      <Field label="Желаемая дата" error={errors.date} htmlFor="date">
        <input
          id="date"
          name="date"
          type="date"
          min={today}
          value={values.date}
          onChange={(e) => {
            setValues((v) => ({ ...v, date: e.target.value }));
            clearError("date");
          }}
          aria-invalid={errors.date ? true : undefined}
          className={`${inputBase} ${errors.date ? inputError : inputOk}`}
        />
      </Field>

      <button type="submit" className={`${btnPrimary} mt-2 w-full`}>
        Отправить заявку
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-soft">
        Учебный проект: заявка сохраняется только в вашем браузере
      </p>
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="mb-5 last:mb-0">
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-error" role="alert">
          <IconAlert className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

interface ConfirmationProps {
  application: Application;
  restored: boolean;
  onAgain: () => void;
}

function Confirmation({ application, restored, onAgain }: ConfirmationProps) {
  const program = programs.find((p) => p.id === application.programId);
  const rows: [string, string][] = [
    ["Номер заявки", application.id],
    ["Имя", application.name],
    ["Программа", program?.name ?? application.programId],
    ["Длительность", program?.duration ?? "—"],
    ["Цена", program ? formatPrice(program.price) : "—"],
    ["Дата", formatDateRu(application.date)],
  ];

  return (
    <div
      className="rounded-card border border-line bg-surface p-7 text-center shadow-card md:p-10"
      role="status"
    >
      <span className="mx-auto flex size-14 items-center justify-center rounded-card bg-success/12 text-success">
        <IconCheck className="size-7" />
      </span>
      <h3 className="mt-5 font-display text-3xl font-semibold">Заявка принята</h3>
      {restored && (
        <p className="mt-2 text-sm text-ink-soft">
          Мы восстановили её из сохранённых данных вашего браузера
        </p>
      )}
      <dl className="mx-auto mt-8 max-w-sm divide-y divide-line text-left text-sm">
        {rows.map(([term, value]) => (
          <div key={term} className="flex items-baseline justify-between gap-6 py-3">
            <dt className="text-ink-soft">{term}</dt>
            <dd className="text-right font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
      <button type="button" onClick={onAgain} className={`${btnGhost} mt-8`}>
        Оформить ещё одну заявку
      </button>
    </div>
  );
}
