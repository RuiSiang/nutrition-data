import path from 'path'
import dotenv from 'dotenv'
import { loadData } from './utils/dataloader'
import { database } from './utils/database'

import 'reflect-metadata'

dotenv.config()

const rawDataPath = process.env.RAW_DATA_PATH || path.join(process.cwd(), 'data', 'foundationDownload.json')
const reloadData = process.env.RELOAD_DATA == 'True' ? true : false

database.initialize().then(async () => {
  if (reloadData) {
    await loadData(rawDataPath)
  }
})
