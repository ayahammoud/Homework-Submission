var object = {
   input: "hello",
   output: "hi"
   };
 console.log(object);

 var object2 = {
   input: "how are you?",
   output: "great!"
   };
 console.log(object2);



 function replay(){
 var quastion = document.getElementById("input").value;
 if (quastion==object.input){
   document.getElementById('output').value=object.output;
   }
 else if (quastion==object2.input){
   document.getElementById('output').value=object2.output;
   }
 else{
   document.getElementById('output').value="I don't understand that command. please enter another";
   }
   }

// starting with HomeWork11
// first question - pictures of dogs
   function loadDoc() {
     var http = new XMLHttpRequest();
     http.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
       	var obj = JSON.parse(this.responseText);
         document.getElementById("demo").innerHTML = "<img src=" + obj.message + ">";
       }
     };
     http.open("GET", "https://dog.ceo/api/breeds/image/random" , true);
     http.send();
   }

// second question - the alert


   var timeoutID;

   function delayedAlert() {
     timeoutID = window.setTimeout(window.alert, 2000, 'Did you forget about me? It is your friend, the Alarm!');
   }
