module.exports = {
  '@tags': ['smoke'],

  'login com sucesso': (browser) => {
    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    login.with('zumbi@dospalmares.com.br', 'pwd123')
    sidebar.expectLoggedUser('Quilombo')
  }
}

// module.exports = {
  // 'Dado que eu acesso a página de login': function (browser) {
  //   browser
  //     .resizeWindow(1920, 1080)
  //     .url('http://zombie-web:5000/login')
  //     .waitForElementVisible('.card-login', 3000)
  // },
  // 'Quando eu faço login com sucesso': function (browser) {
  //   browser
  //     .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
  //     .setValue('input[name=password]', 'pwd123')
  //     .click('.login-button')
  // },
  // 'Então devo ver o meu nome na área logada': function (browser) {
  //   var userInfo = '.user .info span'
  //   browser
  //     .waitForElementVisible(userInfo, 3000)
  //     .assert.containsText(userInfo, 'Quilombo')
  //     .end();
  // }
// }