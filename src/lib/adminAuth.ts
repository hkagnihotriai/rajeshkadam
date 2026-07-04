import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE_NAME = "admin_session";

function getAdminPassword() {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) throw new Error("Missing ADMIN_PASSWORD env var");
  return secret;
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function createAdminSessionToken() {
  return createHmac("sha256", getAdminPassword()).update("admin-session").digest("hex");
}

export function isValidAdminSessionToken(token: string | undefined) {
  if (!token) return false;
  return safeEqual(token, createAdminSessionToken());
}

export function verifyAdminPassword(password: string) {
  return safeEqual(password, getAdminPassword());
}
