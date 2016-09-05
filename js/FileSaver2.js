$("#btn-dnd").click( function() {
		  var text = $("#text").val();
		 //var filename = $("title-note").val()
		  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
		  saveAs(blob, 'ThoughtPad.txt');

		});