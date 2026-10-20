export interface Application {
  id: string;
  name: string;
  programId: string;
  date: string;
  createdAt: string;
}

const STORAGE_KEY = "meesto-spa:applications";

export function loadApplications(): Application[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Application[]) : [];
  } catch {
    return [];
  }
}

export function saveApplication(app: {
  name: string;
  programId: string;
  date: string;
}): Application {
  const record: Application = {
    ...app,
    name: app.name.trim(),
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  const list = loadApplications();
  list.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return record;
}

function generateId(): string {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `SPA-${n}`;
}

export function formatDateRu(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
