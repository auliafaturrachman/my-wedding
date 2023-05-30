const Comment = require("../model/Comment");

const index = async () => {
	try {
		return await Comment.find({ visibility: "true" }).exec();
	} catch (ex) {
		return ex;
	}
};

const create = async (req) => {
	try {
		let newComment = new Comment({
			name: req.body.name,
			attendance: req.body.attendance,
			wishes: req.body.wishes,
			visibility: "true",
		});

		await newComment.save();
		return newComment;
	} catch (ex) {
		return ex;
	}
};

const show = async ({ _id }) => {
	return await Comment.findById({ _id }).exec();
};

module.exports = {
	index,
	create,
	show,
};
