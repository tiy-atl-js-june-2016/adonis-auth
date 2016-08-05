'use strict'

const Schema = use('Schema')

class FixUserIdTodosSchema extends Schema {

  up () {
    this.table('todos', (table) => {
      table.string('user_id')
    })
  }

  down () {
    this.table('todos', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = FixUserIdTodosSchema
