'use strict'

const User = use('App/Models/User');
class AuthController {
  async login({request, response, auth}){
    const { user } = request.all();
    const logged = await.auth.attempt(user.email, user.password, true);
    return response.json(logged);
  }

  async register({request, response}){
    const UserInstance = new User();
    const { user } = request.all();

    UserInstance.username = user.email;
    UserInstance.email = user.email;
    UserInstance.password = user.password;

    await UserInstance.save();

    return response.json(UserInstance);
  }
  async profile({request, response, auth}){
    let user = await auth.getUser();
    const userInput = request.input('user');
    user.email = userInput['email'];
    user.username = userInput['username'];
    await user.save();

    const logged = await auth.geenrate(user, true);
    return response.json(logged);
  }
}

module.exports = AuthController
