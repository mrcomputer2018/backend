const connection = require('../db/connection');

const getAll = async () => {
    try {

        const tasks = await connection.execute('SELECT * FROM tasks');
        return tasks;

    } catch (error) {
        
        console.log(error);
    }
    
};

module.exports = {
    getAll,
};