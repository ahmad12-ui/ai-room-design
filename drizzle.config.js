import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://AI_ROOM_DESIGN_owner:NT4SZGz0OlPp@ep-blue-sunset-a5txiuhu.us-east-2.aws.neon.tech/AI_ROOM_DESIGN?sslmode=require' ,
  },
});