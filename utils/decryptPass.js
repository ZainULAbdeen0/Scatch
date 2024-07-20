const bcrypt = require('bcrypt');

const decryptPass = async (pass , hash) => {
    try {
        const status = bcrypt.compare(pass , hash);      
        return status;
    } catch (err) {
        res.send(err.message)
    }
};

module.exports.comparePass = decryptPass;