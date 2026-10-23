import bcrypt from "bcryptjs";

export function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password, passwordHash) {
  return bcrypt.compare(password, passwordHash);
}
