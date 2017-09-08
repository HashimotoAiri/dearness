function writeHeader(){

	$.ajax({
		url: "/sanwa_re/header.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}

function writeFooter(){

	$.ajax({
		url: "/sanwa_re/footer.html", 
		cache: false, 
		async: false, 
		success: function(html){
			document.write(html);	
		}
	});

}
