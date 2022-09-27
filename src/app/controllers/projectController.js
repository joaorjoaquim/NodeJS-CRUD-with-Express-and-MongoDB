const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Project = require('../models/project');
const Task = require('../models/task');


const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try{
        const projects = await Project.find().populate(['user', 'tasks']); //Eager Loading

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
        const { title, description, tasks } = req.body;
        
        const project = await Project.create({title, description, user: req.userId}); //Concatenating body and user id

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id});

            await projectTask.save();
            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({ project });
    } catch (err){
        return res.status(400).send({ error: 'Error creating new Project'})
    }
});

router.put('/:projectId', async (req, res) => {
    try{
        const { title, description, tasks } = req.body;
        
        const project = await Project.findByIdAndUpdate(
            req.params.projectId, 
                {
                    title, 
                    description
                }, { new: true }); //Concatenating body and user id

            project.tasks = [];
            await Task.remove({ project: project._id });
        
            await Promise.all(tasks.map(async task => {
                const projectTask = new Task({ ...task, project: project._id});

            await projectTask.save();
            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({ project });
    } catch (err){
        return res.status(400).send({ error: 'Error updating new Project'})
    }
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