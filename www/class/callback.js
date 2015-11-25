getCash = function(id){
	$.post("http://utoappia.com/Daniel/CS_410_TradingFever/getCash.php", 
		{
			avatar_id : JSON.stringify(id),
		},
		function(string) {
			return string;
	});
}

setCash = function(id, newCashAmount){
	$.post("http://utoappia.com/Daniel/CS_410_TradingFever/setCash.php", 
		{
			avatar_id : JSON.stringify(id),
			avatar_cash : newCashAmount,
		},
		function(string) {
			console.log("update succesful");
	});
}