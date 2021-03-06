import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

// Import some utilities
import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';

// Import some controllers
import { RegisterController } from './controllers/register.controller';
import { LoginController } from './controllers/login.controller';
import { AddController } from './controllers/add.controller';

// Import some services
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .controller('AddController', AddController)
  .service('UserService', UserService)
  .service('ProductService', ProductService);

