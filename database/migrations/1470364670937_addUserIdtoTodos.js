'use strict'

const Schema = use('Schema')

class AddUserIdtoTodosSchema extends Schema {

  up () {
    this.table('todos', (table) => {
      // alter todos table
      table.string('user_id')
    })
  }

  down () {
    this.table('todos', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddUserIdtoTodosSchema
