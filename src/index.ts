import sequelize from "./config/db";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config(); // Lee las variables de entorno del archivo .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilita CORS ( para peticiones desde otra app )
app.use(morgan("dev")); // Mestra las peticiones en consola
app.use(express.json()); /// Permite leer JSON del body

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Conexión a la base de datos establecida correctamente.");

    app.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error("🔴 Error al conectar con la base de datos:", error);
  });

// app.listen(PORT, () => {
//   console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
// });
