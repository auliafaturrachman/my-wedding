const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	attendance: {
		type: String,
		required: true,
	},
	wishes: {
		type: String,
		required: true,
	},
	visibility: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Comment = mongoose.model("comment", CommentSchema);
