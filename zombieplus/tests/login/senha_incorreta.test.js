module.exports = {
  'senha incorreta': (browser) => {
    let login = browser.page.login()
    login
      .with('zumbi@dospalmares.com.b', '123abc')
      .expectAlertDanger('Usuário e/ou senha inválidos')
  }
}