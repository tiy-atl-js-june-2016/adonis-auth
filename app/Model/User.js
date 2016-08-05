'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden () {
    return ['password']
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  todos () {
    return this.hasMany('App/Model/Todo')
  }

}

module.exports = User
