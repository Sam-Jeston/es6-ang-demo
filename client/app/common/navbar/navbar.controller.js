class NavbarController {
  constructor ($rootScope) {
    this.$rootScope = $rootScope

    this.name = 'navbar'
    this.activeState = 'home'

    this.menu = [
      {title: 'Home', state: 'home'},
      {title: 'About', state: 'about'}
    ]

    this.$rootScope.$on('$stateChangeSuccess', this.activeNav())
  }

  activeNav () {
    return (event, toState) => {
      this.activeState = toState.name
    }
  }
}

// Reference
NavbarController.$inject = ['$rootScope']
export default NavbarController
