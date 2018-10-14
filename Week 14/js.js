var object = {
   input: "hello",
   output: "hi"
   };

  var object2 = {
   input: "how are you?",
   output: "great!"
   };


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


   //creating a function:

   function friend(firstName, lastName, age, eyeColor){

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.person = function() {
   console.log("name : " + this.firstName + this.lastName + " ," + "age : " + this.age + " ," +
   "eyeColor : " + this.eyeColor);
 }
 }
 const maha = new friend("maha" , " alio" , 26, "brown");
 maha.person();
