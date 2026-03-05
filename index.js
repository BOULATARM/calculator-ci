const express = require("express");

const app = express();
app.use(express.json());

// Route "health" (utile pour vérifier que l'app répond)
app.get("/", (req, res) => {
  res.json({ message: "Calculator API is running" });
});

// Helpers
function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error("Invalid number");
  return n;
}

// Addition
app.get("/add/:a/:b", (req, res) => {
  try {
    const a = toNumber(req.params.a);
    const b = toNumber(req.params.b);
    res.json({ result: a + b });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Soustraction
app.get("/sub/:a/:b", (req, res) => {
  try {
    const a = toNumber(req.params.a);
    const b = toNumber(req.params.b);
    res.json({ result: a - b });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Multiplication
app.get("/mul/:a/:b", (req, res) => {
  try {
    const a = toNumber(req.params.a);
    const b = toNumber(req.params.b);
    res.json({ result: a * b });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Division (gestion division par zéro)
app.get("/div/:a/:b", (req, res) => {
  try {
    const a = toNumber(req.params.a);
    const b = toNumber(req.params.b);

    if (b === 0) {
      return res.status(400).json({ error: "Division by zero" });
    }
    res.json({ result: a / b });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = app;