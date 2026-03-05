const app = require("./index");

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Calculator API listening on http://localhost:${PORT}`);
});

// Pour les tests (Jest) : permet de fermer proprement le serveur si besoin
module.exports = server;