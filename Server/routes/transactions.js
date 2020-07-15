const express = require("express");
const router = express.Router();

const {
  getTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
  updateTransaction,
} = require("../controllers/transactions");

router.route("/").get(getTransactions).post(addTransaction);

router.route("/:d").delete(deleteTransaction);

router.route("/edit/:id").get(editTransaction).post(updateTransaction);

module.exports = router;
