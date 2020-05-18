const chai = require('chai')
const path = require('path')

class Test {

	static include(relativePath) {
		let modulePath = path.resolve(__dirname, 'src', relativePath)
		return require(modulePath)
	}

	static require(relativePath) {
		let modulePath = path.resolve(__dirname, '..', 'src', relativePath)
		return require(modulePath)
	}

}

Test.assert = chai.assert

module.exports = Test
