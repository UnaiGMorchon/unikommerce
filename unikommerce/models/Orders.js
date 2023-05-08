import mongoose from "../Backend/config/mongoose.js";

const ordersSchema = new mongoose.Schema({
  iduser: {
    type: mongoose.Types.ObjectId,
    ref: "buyer",
    required: true,
  },

  nameproduct: {
    type: String,
    required: true,
  },

  idproduct: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    rquired: true,
  },
  description: {
    type: String,
    required: true,
  },

  orderdate: {
    type: Date,
    required: true,
  },

  quantityproducts: {
    type: Number,
    required: true,
  },

  adress: {
    type: String,
    required: false,
  },

  cardnumber: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    rquired: true,
    unique: true,
  },

  stateorder: {
    type: String,
    required: false,
    enum: ["shipped", "cancel", "processing", "pendant"],
  },

  freezeTableName: true,
  typestamps: false,
});

const Orders = mongoose.model("orders", ordersSchema);
export default Orders;
