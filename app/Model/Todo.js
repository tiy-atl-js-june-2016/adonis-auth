'use strict'

const Lucid = use('Lucid')

class Todo extends Lucid {

  user () {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Todo
