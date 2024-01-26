import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 5,
  },
},{ timestamps: true }
);

const User = mongoose.model("User", UserScheme);

export default User;
