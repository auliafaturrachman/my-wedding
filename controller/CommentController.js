const Comment = require("../model/Comment");

const index = async () => {
  try {
    return await Comment.find().exec();
  } catch (ex) {
    return ex;
  }
};

const create = async (req) => {
  try {
    let newComment = new Comment({
      name: req.body.name,
      whatsapp: req.body.whatsapp,
      attendance: req.body.attendance,
      wishes: req.body.wishes,
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
