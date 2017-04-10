
'use strict'

var oop = require('../code/oop_exercise.js');

describe("Test for Inheritance", function(){

	var testcase1 = new savingsAccount();

	var testCase2 = new currentAccount();

	it ("Should return true if savingsAccount is a subclass of bankAccount", function(){

		expect(oop.testcase1 instanceof savingsAccount).toBe(true);
	});

	it("Should return true if currentAccount is a subclass of bankAccount", function(){

		expect(oop.testCase2 instanceof currentAccount).toBe(true);
	});
});