const Transaction = require("../models/Transaction");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Post new transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (valError) => valError.message
      );

      return res.status(400).json({
        success: false,
        message: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Server Failure",
      });
    }
  }
};

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      res.status(404).json({
        success: false,
        error: "Transaction not found",
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Get a transaction
// @route   GET /api/v1/transactions/edit/:id
// @access  Public
exports.editTransaction = (req, res, next) => {
  res.send("GET a transaction");
};

// @desc    Post edited transaction
// @route   POST /api/v1/transactions/edit/:id
// @access  Public
exports.updateTransaction = (req, res, next) => {
  res.send("POST edited transaction");
};
