import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userid: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  mobile_no: { type: String, required: true },
  city: {type: String, required: true },
  date_b: { type: String, required: true },
})

const User = models.User || model('User', UserSchema);

export default User;

