import findRule from '../src/helpers/find-rule';
import testData from './test-data';

describe('Find Rule', function () {

	it('should find existed rule by id and return it', function () {
		let result = findRule(testData.rules, testData.rules[0].true_id);
		let expectedResult = testData.rules[1];
		expect(result.title).toBe(expectedResult.title);
		expect(result.id).toBe(expectedResult.id);
	});

	it('should return null if wrong if non existed id is passed', function () {
		let result = findRule(testData.rules, 17);
		expect(result).toBe(null);
	});

});
