import ruleParser from './rule-parser';

if (!global) {
	var global = window;
}

export default function ruleInvoker(object, code) {
	let parsedRule = ruleParser(code);
	// Prevent mutations of source object inside the rule
	// this here - is a global (window if global is not exists),
	global[parsedRule.param] = Object.assign({}, object);
	// Using Function constructor instead of 'eval' - just some principles
	return new Function(parsedRule.body)();
};
