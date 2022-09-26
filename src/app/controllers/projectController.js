const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Project = require('../models/project');
const Task = require('../models/task');


const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try{
        const projects = await Project.find().populate('user'); //Eager Loading

        return res.send({ projects });
    } catch (err) {
        return res.status(400).send({ error: 'Error showing Projects'})
    }
});

router.get('/:projectId', async (req, res) => {
    try{
        const project = await Project.findById(req.params.projectId).populate('user'); //Eager Loading

        return res.send({ project });
    } catch (err) {
        return res.status(400).send({ error: 'Error showing Project'})
    }
});

router.post('/', async (req, res) => {
    try{
        const project = await Project.create({...req.body, user: req.userId}); //Concatenating body and user id

        return res.send({ project });
    } catch (err){
        return res.status(400).send({ error: 'Error creating new Project'})
    }
});

router.put('/:projectId', async (req, res) => {
    res.send({ user: req.userId});
});

router.delete('/:projectId', async (req, res) => {
    try{
        const project = await Project.findByIdAndRemove(req.params.projectId).populate('user'); //Eager Loading

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting Project'})
    }
});

module.exports = app => app.use('/projects', router);