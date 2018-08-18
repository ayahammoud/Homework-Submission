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
