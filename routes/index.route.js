const express = require("express");
const router = express.Router();

const userRouter = require("./user/user.route");
const authRouter = require("./auth/auth.route");
const courierRouter = require("./courier/courier.route");
const courierServiceRouter = require("./courier/courier.service.route");
const productCategoryRouter = require("./product/product.category.route");
const productTypeRouter = require("./product/product.type.route");
const productRouter = require("./product/product.route");
const reviewRouter = require("./review/review.route");
const discussRouter = require("./discuss/discuss.route.js");
const replyRouter = require("./discuss/reply.route.js");
const transactionRouter = require("./transactions/transaction.js");
const transactionDetailRouter = require("./transactions/transaction.detail.js");
const voucherRouter = require("./voucher/voucher.route.js");
const { auth } = require("../middleware/auth");

router.use("/auth", authRouter);
router.use("/users", auth, userRouter);
router.use("/courier-services", auth, courierServiceRouter);
router.use("/couriers", auth, courierRouter);
router.use("/product-categories", productCategoryRouter);
router.use("/product-types", productTypeRouter);
router.use("/products", productRouter);
router.use("/reviews", reviewRouter);
router.use("/discusses", discussRouter);
router.use("/discusses/:id/replies", auth, replyRouter);
router.use("/transactions", auth, transactionRouter);
router.use("/transaction-details", auth, transactionDetailRouter);
router.use("/voucher", auth, voucherRouter);
module.exports = router;
