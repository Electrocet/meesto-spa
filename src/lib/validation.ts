export interface FormValues {
  name: string;
  programId: string;
  date: string;
}

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = "Введите имя";
  } else if (name.length < 2) {
    errors.name = "Имя — минимум 2 символа";
  }

  if (!values.programId) {
    errors.programId = "Выберите программу";
  }

  if (!values.date) {
    errors.date = "Выберите дату";
  } else if (values.date < toIsoDate(new Date())) {
    errors.date = "Дата не может быть в прошлом";
  }

  return errors;
}

export function toIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
