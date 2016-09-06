import logger from '../src/helpers/logger';

describe('Logger', function () {

	it('should has function failed', function () {
		expect(logger.failed instanceof Function).toBe(true);
	});

	it('should has function passed', function () {
		expect(logger.passed instanceof Function).toBe(true);
	});

});
