var userActions = {
  expectLoggedUser: function (name) {
    return this
      .waitForElementPresent('@userInfo', 3000)
      .assert.containsText('@userInfo', name)
  }
}

module.exports = {
  commands: [userActions],
  elements: {
    userInfo: '.user .info span'
  }
}