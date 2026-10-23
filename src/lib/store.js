import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import { normalizeEmail } from "@/lib/auth/password";

const filePath = path.join(process.cwd(), "data", "store.json");

const DEMO_ADMIN = {
  email: "admin@heavenautos.pk",
  password: "HeavenAdmin#2026",
};

function seed() {
  return {
    users: [
      {
        id: "user-admin",
        name: "Heaven Admin",
        email: DEMO_ADMIN.email,
        passwordHash: bcrypt.hashSync(DEMO_ADMIN.password, 10),
        role: "admin",
        createdAt: new Date().toISOString(),
      },
    ],
    orders: [],
    seq: 10000,
  };
}

function readStore() {
  if (!fs.existsSync(filePath)) {
    const initial = seed();
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(initial, null, 2));
    return initial;
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeStore(store) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(store, null, 2));
}

export function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export function findUserByEmail(email) {
  const store = readStore();
  return store.users.find((user) => user.email === normalizeEmail(email)) || null;
}

export function findUserById(id) {
  const store = readStore();
  return store.users.find((user) => user.id === id) || null;
}

export function createUser({ name, email, passwordHash }) {
  const store = readStore();
  const normalized = normalizeEmail(email);
  if (store.users.some((user) => user.email === normalized)) {
    throw new Error("An account with this email already exists");
  }
  const user = {
    id: `user-${Date.now()}`,
    name: name.trim(),
    email: normalized,
    passwordHash,
    role: "customer",
    createdAt: new Date().toISOString(),
  };
  store.users.push(user);
  writeStore(store);
  return user;
}

export function listUsers() {
  return readStore().users.map(publicUser);
}

export function createOrder(input) {
  const store = readStore();
  store.seq += 1;
  const order = {
    id: `ord-${store.seq}`,
    orderNumber: `HA-${store.seq}`,
    ...input,
    orderStatus: "pending",
    createdAt: new Date().toISOString(),
  };
  store.orders.unshift(order);
  writeStore(store);
  return order;
}

export function listOrders() {
  return readStore().orders;
}

export function findOrder(orderNumber) {
  return (
    readStore().orders.find(
      (order) => order.orderNumber.toLowerCase() === String(orderNumber).toLowerCase(),
    ) || null
  );
}

export function updateOrderStatus(id, orderStatus) {
  const store = readStore();
  const order = store.orders.find((item) => item.id === id);
  if (!order) return null;
  order.orderStatus = orderStatus;
  writeStore(store);
  return order;
}

export const DEMO_LOGIN = DEMO_ADMIN;
