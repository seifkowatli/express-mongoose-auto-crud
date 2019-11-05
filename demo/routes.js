import express from 'express'
import Ctrl from './controller'
const router = express.Router()

router.post('/', Ctrl.create)


// -- test starts
import Task from '../lib/task'

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
// -- test ends


module.exports = router
