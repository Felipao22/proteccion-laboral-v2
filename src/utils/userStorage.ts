import type { User } from "../services/loginApi";

export function getUser(): User | null {
  if (typeof window === "undefined") return null;

  const raw = window.sessionStorage.getItem("user");
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setUser(user: User) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem("user", JSON.stringify(user));
}

export function clearUser() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem("user");
}
