let paramExpression = /\((\w+)\)/i;
let bodyExpression = /{(.+)}/i;

export default function ruleParser(code) {
	let param = paramExpression.exec(code);
	let body = bodyExpression.exec(code);
	// some kinda validation of rules;
	return {
		param: param && param[1] ? param[1] : 'obj',
		body: body && body[1] ? body[1] : 'return false;'
	}
}