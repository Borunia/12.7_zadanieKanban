var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2942',
  'X-Auth-Token': 'e243c73cc598d92bddea19b853d9b06f'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
	url: baseUrl + "/board",
	method: "GET",
	success: function(response) {
			setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function(column) {
			var col = new Column(column.id, column.name);
			board.addColumn(col);
			setupCards(col, column.cards);
	});
}

function setupCards(col, cards) {
	cards.forEach(function(card) {
			var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
			col.addCard(card);
	})
}