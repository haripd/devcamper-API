//@desc logger request to console

const logger = (req, res, next) => {
    console.log(`${req.method} - ${req.protocol}://${req.get('host')}`)
    next()
}

module.exports = logger