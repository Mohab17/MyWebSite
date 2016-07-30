/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {

	$('#alertMe').click(function(e) {
		// e.preventDefault(); // to prevent any other events
		$('#successAlert').slideDown();
	});

	$('[rel="tooltip"]').tooltip();


	var audioFilesNames=["","Hero","Bailando (español)"," DUELE EL CORAZON (English Version)"," El Perdón",];
	for (var i = 1; i < 5; i++) {
		var file = 'audio/Enrique'+("000" + i).slice(-3)+'.mp3';

		$('#audioOrderList').append(  '<div class="well"><li id="listNeedMargin"><p class="audioText">'+audioFilesNames[i]+'</p><audio controls><source src="'+file+'" type="audio/mpeg">Please <a href="'+file+'" download>download</a> the audio file.</audio></li></div><!-- end li -->');
	}

	// call json---------------for best concerts
	$.getJSON('concerts.json' , function(data){
		for (var key in data.utrecht) {
   				var school = data.utrecht[key];
				  $("#concerts").append('<li class="col-sm-4"><h3>'+concerts.name+'</h3>'+concerts.location+'</li>');
		}
	//  document.getElementById("concerts").innerHTML =
	//  obj.utrecht.concerts.name ;

 })

});
