const { readContentFile } = require('../utils/readWriteFile');

module.exports = async (req, res, next) => {
  try {
    const posts = await readContentFile('posts.json');
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}
