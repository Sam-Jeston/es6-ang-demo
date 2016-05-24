import angular from 'angular'
import uiRouter from 'angular-ui-router'
import Common from './common/common'
import Components from './components/components'
import AppComponent from './app.component'
import 'normalize.css'
import './common/uikit/css/uikit.css'
import './common/uikit/css/uikit.almost-flat.css'

// Some nice input on ES6 and angular
// http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x
angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])
  .config(($locationProvider) => {
    'ngInject'
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!')
  })

  .component('app', AppComponent)
