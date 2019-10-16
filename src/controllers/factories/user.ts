import GitHubConfig from '../../config/github';
import UserController from '../user';

class UserControllerFactory {
  static make(): UserController {
    return new UserController(
      GitHubConfig.get(),
    );
  }
}

export default UserControllerFactory;
