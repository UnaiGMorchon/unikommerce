import mongoose from "../Backend/config/mongoose.js";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    enum: ["admin", "user", "artist"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    rquired: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  adress: {
    type: String,
    required: false,
  },
  cardnumber: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
