const express = require("express");
const cors = require("cors");
const membrosRoutes = require("./routes/membroRoutes");

const app = express();
const PORT = 3000;

// Middlewares

app.use(cors());
app.use(express.json());

app.use("/api/membros", membrosRoutes);

app.get("/", (req, resp) => {
  resp.json({ message: "API de Membros funcionando!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
