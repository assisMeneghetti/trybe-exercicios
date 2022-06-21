const { readContentFile } = require('../utils/readWriteFile');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await readContentFile('posts.json');
    const post = posts.find(post => post.id === +id);
    if (!post) return res.status(404).json({ message: 'post not found' });
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}
