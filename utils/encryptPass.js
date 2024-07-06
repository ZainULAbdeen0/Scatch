const bcrypt = require('bcrypt');

const hashPass = async (pass) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pass, salt);
        return hash;
    } catch (err) {
        throw new Error('Error hashing password');
    }
};

module.exports = { hashPass };