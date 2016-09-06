import findRule from './find-rule';
import logger from './logger';
import ruleInvoker from './rule-invoker';

// The main run file
export default function flowEngine(obj, rules) {
	let currentRule,
		prevRule,
		nextRule = rules[0],
		result,
		nextId,
		logFn,
		// This is to prevent complex circling, I guess 1000 rules are enough )
		// if not.. so this is just out of the scope of this task
		maxIterations = 1000;

	// No recursion.. only pure cycle
	while (maxIterations) {
		prevRule = currentRule;
		currentRule = nextRule;
		// True or false
		result = ruleInvoker(obj, currentRule.rule);
		nextId = result ? currentRule.true_id : currentRule.false_id;
		logFn = result ? logger.passed : logger.failed;
		// If we should interrupt flow or not
		if (nextId === null) {
			// Log with 'End' word
			logFn(currentRule.title, true);
			break;
		} else {
			// Prevent simple cycling
			if (prevRule && prevRule.id === nextId) {
				logFn(currentRule.title, true);
				break;
			}
			logFn(currentRule.title);
			// Find the next rule
			nextRule = findRule(rules, nextId);
			// check for existence of the rule
			if (nextRule === null) {
				break;
			}
		}
		maxIterations--;
	}
}