

$(document).ready(function() {
	$(".back-button").on("click", function() {
	//alert("aa");
	//serialize
	//var lastGrid = tArraysave1.pop();
		//game.setup1(lastGrid);
		//game.setup1(tArray);
		//alert(JSON.stringify(lastGrid));
		//lastGrid = JSON.parse(JSON.stringify(lastGrid))
		//game.setup1(lastGrid);
		
		
		//var tArraysave2 = new Array();
		//if(game.storageManager.getBackGridCells()){
		//	tArraysave2 = game.storageManager.getBackGridCells();
		//}
		//alert(tArraysave1.pop());
		//var lastGrid = tArraysave2.pop();
		//alert(JSON.stringify(lastGrid));
		//game.setup1(lastGrid);
		
		game.loadBack();
		return false;
	});
})
