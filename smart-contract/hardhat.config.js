require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/KhG6VNiC3a2RfM0J3QOuN3w6gf4iAtja',
      accounts: [
        '4ab4491ade9967947582e0d2facd9dedc5c62c8b1eebaeb455ffe23579fe2631',
      ],
    },
  },
}