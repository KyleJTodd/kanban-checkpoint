import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _commentSchema = new Schema({
  authorId: { type: ObjectId, ref: 'User', required: true },
  content: { type: String, required: true }
}, { timestamps: true })

let _schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  authorId: { type: ObjectId, ref: 'User', required: true },
  listId: { type: ObjectId, ref: 'List', required: true },
  comments: [_commentSchema]
}, { timestamps: true })

// //CASCADE ON DELETE
// _schema.pre('remove', function (next) {
//   //lets find all the lists and remove them
//   this._id //THIS IS THE BOARD
//   Promise.all([
//     //TaskService.deleteMany({ listId: this._id }),
//   ])
//     .then(() => next())
//     .catch(err => next(err))
// })

export default class TaskService {
  get repository() {
    return mongoose.model('Task', _schema)
  }

  async commentsRoute(id, comment) {
    try {
      let task = await this.repository.findById(id)
      if (!comment._id) {
        task.comments.push(comment)
      } else {
        task.comments.forEach((c, i, a) => {
          if (c._id.toString() == comment._id) {
            a.splice(i, 1)
          }
        })
      }
      await task.save()
      return task
    } catch (error) {
      throw error
    }
  }
}
