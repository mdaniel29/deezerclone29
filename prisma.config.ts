import { defineConfig, env} from "prisma/config";
//import { defineConfig} from "prisma/config";
//import {env} from "process";
import "dotenv/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
     url: env("DATABASE_URL"),
     shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
     /* 
      adapter: {
      host: env.DATABASE_HOST,
      port: parseInt(env.DATABASE_PORT || "3306"),
      user: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
      database: env.DATABASE_NAME,
    },
    */
  },
});
