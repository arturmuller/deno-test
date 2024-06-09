import { load } from "@std/dotenv";

const config = await load();

Deno.serve(() => {
  return new Response(`Hello, ${config.KEY}`);
});
