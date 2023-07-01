//greeting
var name="Aryan"
var greet="Hello"
console.log(greet,name)



//results
var result=98;
if(result>90){
    console.log("Passed")
}
else{
    console.log("Failed")
}



//ranking
var place='second'
if(place=='first'){
    console.log('Gold')
}else if(place='second'){
    console.log('Silver')
}else if (place='third'){
    console.log('Bronze')
}else{
    console.log('No Medal')
}



//trafficlight
var light='red'
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
 }



//Old Enough to get a salary
var age=12
if(age>=65){
    console.log("You get income from your pension")
}
else if(age<65 && age>=18){
    console.log("Each month you get a salary")
}
else if(age<18){
    console.log("You get an allowance")
}
else{
    console.log("The value of age variable is not numerical")
}



//Days of the week
var day = `Saturday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Netflix & Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       console.log('There is no such day');
}
