'use strict'

const Todo = use('App/Model/Todo')

class TodoController {

  * store (request, response) {
    const user = request.authUser
    const input = request.only('task')
    input.complete = 'false'
    const todo = new Todo(input)
    yield user.todos().save(todo)
    return response.json(todo)
  } 

  * index (request, response) {
    const user = request.authUser
    const todos = yield user.todos().fetch()
    return response.json(todos.toJSON())
  }

}

module.exports = TodoController
