function changeColor() {
	let hexNumber = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F"
	];
    let hexCode=''
    for (let i =0; i < 6; i++){
        let hexadecimal= Math.floor(Math.random()* hexNumber.length);
        hexCode += hexNumber[hexadecimal]
        document.getElementById ('hex-color').innerHTML = hexCode;
        document.getElementsByTagName('body')[0].style.background= '#'+ hexCode; 
    }
}
