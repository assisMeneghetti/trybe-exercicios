const { Post } = require('./../database/models');

module.exports = async (req, res) => {
  // console.log(req.user.dataValues);
  const posts = await Post.findAll({
    where: {id: req.user.dataValues.id},
    attributes: { exclude: 'id' } 
    });
  res.status(200).json({ mockPosts: posts });
};
