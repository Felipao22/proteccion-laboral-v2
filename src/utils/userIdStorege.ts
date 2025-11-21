export function getUserId() {
  if (typeof window === "undefined") return;
  const sessionToken = window.sessionStorage.getItem("userId") || "";
  return sessionToken;
}

export function setUserId(userId: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem("userId", userId);
}

export function clearUserId() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem("userId");
}
