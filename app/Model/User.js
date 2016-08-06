'use strict'

const Lucid = use('Lucid')

const Todo = use('App/Model/Todo')
const Token = use('App/Model/Token')

class User extends Lucid {

  static get hidden () {
    return ['password']
  }

  apiTokens () {
    return this.hasMany(Token)
  }

  todos () {
    return this.hasMany(Todo)
  }

}

module.exports = User
