module.exports = (req, res) => {
	return res.status(404).json({ message: `Opsss, route '${req.path}' not found!`});
}