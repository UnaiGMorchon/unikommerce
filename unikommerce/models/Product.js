import mongoose from "../Backend/config/mongoose.js";

const productSchema = new mongoose.Schema({
  nameproduct: {
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
  createdate: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  idartist: {
    type: mongoose.Types.ObjectId,
    ref: "owner",
    required: true,
  },

  category: {
    type: String,
    required: false,
    enum: [
      "clothing",
      "decoration",
      "painting",
      "photography",
      "jewelry",
      "ceramic",
      "paper",
      "miniatures",
      "soaps and candel",
    ],
  },

  freezeTableName: true,
  typestamps: false,
});

const Product = mongoose.model("product", productSchema);
export default Product;
