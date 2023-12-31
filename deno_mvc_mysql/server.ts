import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import todoRouter from "./routes/todo.ts";

const app = new Application();
const port: number = 8080;

app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());
app.use(oakCors({ origin: "*" }));

app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "https://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`Listening on: ${port}`);
});

await app.listen({ port });
export default app;