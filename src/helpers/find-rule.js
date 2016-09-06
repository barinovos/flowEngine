// just to extract object from collection using Id field
export default function findRule(collection, id) {
	var item = null;
	collection.forEach((itemInCol) => {
		if (itemInCol.id === id) {
			item = itemInCol;
		}
	});
	return item;
}