var commonStyles = 'color: white; font-weight: bold';
var logger =  {
	failed: (title, isEnd) => {
		console.log(`%c${title} failed${isEnd ? ' .End': ''}`, `background: red; ${commonStyles}`);
	},
	passed: (title, isEnd) => {
		console.log(`%c${title} passed${isEnd ? ' .End': ''}`, `background: green; ${commonStyles}`);
	}
};

export default logger;
