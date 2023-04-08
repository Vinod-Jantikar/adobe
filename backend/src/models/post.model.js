const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    content: { type: String, required: true, minlength: 1, maxlength: 300 },
    likes: { type: Number, default: 0, min: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
