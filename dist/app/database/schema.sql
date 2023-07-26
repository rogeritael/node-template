CREATE DATABASE users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; --pacote do uuid

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(), --função que gera o uuid
  name VARCHAR NOT NULL,
);

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE, --unique: nunca será duplicado
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
