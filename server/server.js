// server.js
import express from "express";
import toutes from "./routes/toutes.js";
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    console.log("Received a request");
  res.send("Hello, Node.js + Express!");
});
app.use("/api", toutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
