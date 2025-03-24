const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Permitir conexiones desde el frontend
app.use(express.json()); // Para leer JSON en las solicitudes

app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:",{PORT});
});