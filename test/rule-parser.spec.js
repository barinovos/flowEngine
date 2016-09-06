import ruleParser from '../src/helpers/rule-parser';
import testData from './test-data';

describe('Rule Parser', function () {

	it('should return object with proper param prop and body', function () {
		let result = ruleParser(testData.rules[0].rule);
		expect(result.param).toBe('obj');
		expect(result.body).toBe('return !!obj;');
	});

});
