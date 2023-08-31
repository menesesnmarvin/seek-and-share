import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: String,
  },
});
//If the Post collection does not exist create a new one.
export default mongoose.models.users || mongoose.model("users", userSchema);
