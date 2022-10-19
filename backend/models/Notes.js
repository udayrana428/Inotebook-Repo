const mongoose = require("mongoose");
const { Schema } = mongoose;
const notesSchema = new Schema({
  user:{type:mongoose.Schema.Types.ObjectId,
  ref:"user"},
  title: { type: String, required: true },
  description: { type: String },
  tag: { type: String },
  date: { type: Date, default: Date.now },
});
const notes = mongoose.model("notes", notesSchema);
module.exports = notes;
