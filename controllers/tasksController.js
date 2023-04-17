const tasksModel = require('../models/TasksModel');

const getAll = async (req, res) => {

    const tasks = await tasksModel.getAll();
    return res.json({ tasks, msg: 'teste funcionando perfeito' });

};

module.exports = {
    getAll,
};