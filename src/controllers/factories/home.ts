import GitHubConfig from '../../config/github';
import HomeController from '../home';

class HomeControllerFactory {
  static make(): HomeController {
    return new HomeController(
      GitHubConfig.get(),
    );
  }
}

export default HomeControllerFactory;
