import type { Pantry } from "./types";

export const DRAFT_KEY = "food-security:pantry-entry-draft:v1";

export function safeParseDraft(raw: string | null): Pantry[] | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed as Pantry[];
  } catch {
    return null;
  }
}

export function loadDraft(): Pantry[] | null {
  return safeParseDraft(localStorage.getItem(DRAFT_KEY));
}

export function saveDraft(pantries: Pantry[]) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(pantries));
}

export function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
}
