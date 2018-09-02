var conv = { input: 'hi', output: ['Hello', 'hi', 'greetings'],
             input1: 'how are you?',output1: ['good','fine', 'bad'],
             input2: 'what is your favourite color?',output2:['blue', 'black and white','all colors']
            };

function reply() {
	// get user input
	let question = document.getElementById('input','input1','input2').value;

	// check if user input (value stored in 'question' variable) matches 'input' key in 'conv' variable
	if(question === conv.input){
		document.getElementById('output','output1','output2').value = conv.output;
	}
	else{
		document.getElementById('output','output1','output2').value = "I don't understand that command. Please enter another.";
	}
}

// click event to trigger chatbot response
document.getElementById('submit').onclick = function(event){
	reply();
}

var randomNumber = function myFunction() {
    var x = document.getElementById("demo")
    x.innerHTML = Math.floor((Math.random() * 2) + 1);
}

var filterType = null;

// couldn't do more :)
