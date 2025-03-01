import { Hono } from 'hono';

const app = new Hono();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

app.get('/', async (c) => {
    await sleep(8000);
    return c.text('Hello Hono!');
});

export default app;
