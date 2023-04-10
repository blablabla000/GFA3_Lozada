function generate() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);

    document.getElementById("num1").innerHTML = "First Number: " + num1;
    document.getElementById("num2").innerHTML = "Second Number: " + num2;
    document.getElementById("num3").innerHTML = "Third Number: " + num3;

    document.getElementById("largestnumber").innerHTML = Math.max(num1, num2, num3);

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let randomIndex = Math.floor(Math.random() * alphabet.length);
	let randomletter = alphabet.charAt(randomIndex);

	document.getElementById("randomletter").innerHTML = randomletter;
}