var input = "";

function convertMe() {
	input = document.getElementById("input_text").value;
	// Convert The Text Using Regex
	const regex = /\[\d+]/g;
	// const str = 'Nothing Should Sho Up : [1][11][999]';

	// console.log( input.replace(regex,'') );
	var show = input.replace(regex,'') ;
	document.getElementById("output_text").value = show;

}