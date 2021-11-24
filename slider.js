/*------------------------------Projects------------------------------*/

var tab = ['strange_case.png', 'Une.png', 'facade_avant.png'], indice = 0;

$("#next").click(function () {
	if (indice < tab.length - 1) {
		indice++;
	}
	else {
		indice = 0;
	}
	console.log(indice);
	$("#img-min").fadeOut(500, function () {
		$("#img-min").attr('src', "assets/projects/" + tab[indice]).fadeIn();
	});
	console.log(tab[indice]);
});

$("#prev").click(function () {
	if (indice > 0) {
		indice--;
	}
	else {
		indice = tab.length - 1;
	}
	console.log(indice);
	$("#img-min").fadeOut(500, function () {
		$("#img-min").attr('src', "assets/projects/" + tab[indice]).fadeIn();
	});
	console.log(tab[indice]);
});

function next() {
	if (indice < tab.length - 1) {
		indice++;
	}
	else {
		indice = 0;
	}
	console.log(indice);
	$("#img-min").fadeOut(500, function () {
		$("#img-min").attr('src', "assets/projects/" + tab[indice]).fadeIn();
	});
	console.log(tab[indice]);
}

setInterval(next, 2000);