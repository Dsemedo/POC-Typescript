# POC-Typescript

Basic Back-end project for a Typescript POC.

## About

That project has a unique table to organized users who was beted on soccer games.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want

4. Run the back-end in a development environment:

```bash
npm run dev
```

## How to use a project

```bash
Post: /user
body: {"username": "seu_username"}
Used to create a new user
```

```bash
Get: /user
Used to show all users
```

```bash
Get: /user/bets
Used to show all users has beted
```

```bash
Delete: /user/:id
Used to delete that user
```

```bash
Patch: /user/:id
Used to change status of user to beted = true
```
