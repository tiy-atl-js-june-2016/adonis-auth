'use strict';



class UserController {

  * store (request, response) {
    const input = request.only('email', 'password', 'firstname', 'lastname', 'github');

    console.log(input);

    return response.json({ success: true });
  }

}

module.exports = UserController;