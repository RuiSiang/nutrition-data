import { DataSource } from 'typeorm'
import path from 'path'

export const database = new DataSource({
  type: 'mariadb',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USER || 'user',
  password: process.env.DATABASE_PASS || 'password',
  database: process.env.DATABASE_NAME || 'nutrition-data',
  entities: [path.join(process.cwd(), 'src', 'entity', '*')],
  synchronize: true,
})
