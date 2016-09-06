import ruleInvoker from '../src/helpers/rule-invoker';
import testData from './test-data';

describe('Rule Invoker', function () {

	it('should return true result if function should return it', function () {
		expect(ruleInvoker(testData.data, testData.rules[0].rule)).toBeTruthy();
	});

	it('should return false result if function should return it', function () {
		expect(ruleInvoker(testData.data, testData.rules[2].rule)).toBeFalsy();
	});

});
