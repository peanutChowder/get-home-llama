const generateRandString = async () => {
    return await require('crypto').randomBytes(32).toString('hex')
}

module.exports = generateRandString