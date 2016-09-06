var testData = {
	"data": {
		"color": "red",
		"valid": false
	},
	"rules": [
		{
			"id": 1,
			"title": "Rule #1",
			"rule": "function(obj) {return !!obj;}",
			"true_id": 2,
			"false_id": 5
		},
		{
			"id": 2,
			"title": "Rule #2",
			"rule": "function(obj) {return !!obj.valid;}",
			"true_id": 3,
			"false_id": 4
		},
		{
			"id": 3,
			"title": "Rule #3",
			"rule": "function(obj) {return obj.color === 'green';}",
			"true_id": null,
			"false_id": 4
		},
		{
			"id": 4,
			"title": "Rule #4",
			"rule": "function(obj) {return obj.color === 'red';}",
			"true_id": null,
			"false_id": null
		}
	]
};

export default testData;
