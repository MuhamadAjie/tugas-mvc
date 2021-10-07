const express = require("express");
const {
  create,
  getAll,
  update,
  destroy,
} = require("../controllers/controller.js");

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
