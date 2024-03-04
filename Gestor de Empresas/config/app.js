import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { config } from "dotenv"
import categoriaRoutes from '../src/CATEGORIAS/categoria.routes.js'
import usuarioRoutes from '../src/USUARIOS/usuario.routes.js'
import empresasRoutes from '../src/EMPRESAS/empresa.routes.js'


const app = express()
config()
const port = process.env.PORT || 3200

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use(categoriaRoutes)
app.use(usuarioRoutes)
app.use(empresasRoutes)

export const initServer = () => {
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}