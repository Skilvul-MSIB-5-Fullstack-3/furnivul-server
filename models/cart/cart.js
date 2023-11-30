const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  _productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;