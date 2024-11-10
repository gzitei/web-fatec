import http from "node:http";
import crypto from "node:crypto";
import fs from "node:fs";

const url = "localhost";
const port = 3000;
const salt = "xolofompila"; //https://www.youtube.com/watch?v=OxZbSMM2yW0

const router = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
};

const db = "./db.json";

const readUsers = () => {
  const fileExists = fs.existsSync(db);
  if (!fileExists) {
    updateUsers({ users: [] });
  }
  return fs.readFileSync(db, { encoding: "utf-8" });
};

const updateUsers = (users) => {
  fs.writeFileSync(db, JSON.stringify(users, null, 2), { encoding: "utf-8" });
};

const authenticateUser = (username, password) => {
  const registeredUsers = readUsers();
  const hash = hashPassword(password);
  const json = JSON.parse(registeredUsers);
  const candidate = json.users.filter(
    (user) => user.username === username && user.password === hash,
  );
  if (candidate.length === 0) throw new Error("Usuário/senha inválido(a)!");
  return `Usuário ${username} logado com sucesso!`;
};

const registerUser = (username, inputPassword) => {
  if (!username || !inputPassword) throw new Error("Informações incompletas!");
  const registeredUsers = readUsers();
  const json = JSON.parse(registeredUsers);
  const usernameAllowed = json.users.filter(
    (user) => username === user.username,
  );
  if (usernameAllowed.length > 0) throw new Error("Nome de usuário já existe!");
  const password = hashPassword(inputPassword);
  const id = crypto.randomUUID();
  const timestamp = new Date().toISOString();
  json.users.push({
    timestamp,
    id,
    username,
    password,
  });
  updateUsers(json);
};

const hashPassword = (password) => {
  const encrypted = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return encrypted;
};

const getBody = async (req) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  return JSON.parse(Buffer.concat(buffers).toString());
};

const defaultHandler = (_, res) => {
  res.writeHead("404", { "Content-Type": "text/plain" });
  res.end("Recurso não encontrado!");
};

const newUser = async (req, res) => {
  const body = await getBody(req);
  const { username, password } = body;
  let statusCode, msg;
  try {
    registerUser(username, password);
    statusCode = 200;
    msg = `Usuário ${username} registrado!`;
  } catch (e) {
    statusCode = 400;
    msg = e.message;
  }
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(msg);
};

const login = async (req, res) => {
  const body = await getBody(req);
  const { username, password } = body;
  let statusCode, msg;
  try {
    authenticateUser(username, password);
    statusCode = 200;
    msg = `Usuário ${username} autenticado!`;
  } catch (e) {
    statusCode = 400;
    msg = e.message;
    console.error(e.stack);
  }
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(msg);
};

router["POST"]["/register"] = newUser;
router["POST"]["/login"] = login;
router["GET"]["/"] = (_, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
};

const server = http.createServer((req, res) => {
  const endpoint = req.url;
  const method = req.method;
  const handler = router[method][endpoint] || defaultHandler;
  handler(req, res);
});

server.listen(port, url, () => {
  console.log(`Server running on ${url}:${port}`);
});
