class NavbarController {
  constructor ($scope, $rootScope) {
    this.$rootScope = $rootScope
    this.$scope = $scope

    this.name = 'navbar'
    this.activeState = 'home'
    this.menu = [
      {title: 'Home', state: 'home'},
      {title: 'About', state: 'about'}
    ]

    this.$rootScope.$on('$stateChangeStart', this.activeNav())
    this.$scope.$watch('activeState', this.watchingActive())
  }

  activeNav () {
    return (event, toState, toParams) => {
      // Why is this not updating the scope???????
      this.activeState = toState.name
    }
  }

  watchingActive () {
    return () => {
      console.log(this.activeState)
      console.log('Active hit!!!!')
    }
  }
}

NavbarController.$inject = ['$scope', '$rootScope']
export default NavbarController
