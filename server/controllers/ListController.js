import ListService from '../services/ListService'
import express from 'express'
import { Authorize } from '../middlewear/authorize'
import TaskService from '../services/TaskService';

//import service and create an instance
let _service = new ListService()
let _repo = _service.repository
let _taskRepo = new TaskService().repository

//PUBLIC
export default class ListsController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/tasks', this.getTaskByListId)
      .use(Authorize.authenticated)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      //only gets Lists by user who is logged in
      let data = await _repo.find({ authorId: req.session.uid })
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getTaskByListId(req, res, next) {
    try {
      //only gets Tasks by user who is logged in
      let data = await _taskRepo.find({ listId: req.params.id })
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let data = await _repo.findOne({ _id: req.params.id, authorId: req.session.uid })
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _repo.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _repo.findOneAndUpdate({ _id: req.params.id, authorId: req.session.uid }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let list = await _repo.findOne({ _id: req.params.id, authorId: req.session.uid })
      await list.remove()
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


