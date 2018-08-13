// Q1 -->


function vehicle(color, age,type){
  var vehicleage = "";
  
   if (age<2)
     {
    age = "new";
     }
  else
    {
     age  = "used";
    }
  
 var code = "" ;
  
  if (type == 1) {
    code = "car";
  }
  else if ( type == 2) {
    code = "motorcbike";
  }

 
  console.log("a " +  color + " " + age + " " + code );
}

vehicle("blue", 5, 1);

// Q2 -->

function vehicle(color, age,type){
  
   var vehicleage = "";
  
   if (age<1)
     {
    age = "new";
     }
  else
    {
     age  = "used";
    }
   
    
 var code = "" ;
  
  if (type == 1) {
    code = "car";
  }
  else if ( type == 2) {
    code = "bike";
  }
  
  
    console.log("a " +  color + " " + age + " "+ code );
}

vehicle("green", 0, 2);

//Q3-->

var languagas = {javascript:"saad", html :"rajie" , css:"rajie" };
console.log(languagas);
