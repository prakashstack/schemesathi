export type ApiErrorKind = "network" | "timeout" | "rateLimit" | "unavailable" | "invalid" | "empty" | "cors";

export class ApiError extends Error {
  constructor(public kind: ApiErrorKind) {
    super(kind);
  }
}

/** fetch with timeout + normalised, user-safe error kinds. */
export async function fetchJson<T>(url: string, timeoutMs = 15000): Promise<T> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  let res: Response;
  try {
    res = await fetch(url, { signal: ctrl.signal, headers: { Accept: "application/json" } });
  } catch (e) {
    if ((e as Error).name === "AbortError") throw new ApiError("timeout");
    // Browsers report CORS failures as a generic TypeError.
    throw new ApiError(typeof navigator !== "undefined" && navigator.onLine === false ? "network" : "cors");
  } finally {
    clearTimeout(timer);
  }
  if (res.status === 429) throw new ApiError("rateLimit");
  if (!res.ok) throw new ApiError("unavailable");
  try {
    return (await res.json()) as T;
  } catch {
    throw new ApiError("invalid");
  }
}
