// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @desc    Post new transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = (req, res, next) => {
  res.send("POST new transaction");
};

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transaction");
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
