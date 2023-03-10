const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = 3001;
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");
const { sequelize } = require("./database/index");

server.use(express.json()); // para que funcinoe mi sv con formato JSON
server.use(cors()); // habilito a todos a hacer solicitudes a mi servidor
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(PORT, () => {
  sequelize.sync({ force: true });
  console.log("Server raised in port " + PORT + ", and DB SYNC");
});
