class HomeController {
  constructor (homeService) {
    this.name = 'home'
    homeService.someHomeFunction()
  }
}

HomeController.$inject = ['homeService']
export default HomeController
