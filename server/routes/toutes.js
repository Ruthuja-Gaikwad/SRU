import express from "express";
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

export default router;
