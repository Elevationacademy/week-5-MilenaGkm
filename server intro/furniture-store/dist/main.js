const fetchItemPrice = function(){
	let input = $("#check-price-input").val()

	$.get(`priceCheck/${input}`, function(itemName){
		$("body").append(`<div>${itemName.price}</div>`)
	})
}

const buyItem = function(){
	let input = $("#buy-item-input").val()

	$.get(`buy/${input}`, function(res){
		$("body").append(`<div>${res}</div>`)
	})
}