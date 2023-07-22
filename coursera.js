//Greeting
var name="Aryan"
var greet="Hello"
console.log(greet,name)



//Results
var result=98;
if(result>90){
    console.log("Passed")
}
else{
    console.log("Failed")
}



//Ranking
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



//Traffic Light
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



//Days of the week.
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



for (var i=1; i<=5; i++){
    console.log(i);
}


//forloop
for(var i=10; i>0; i--){
    console.log(i)
}
console.log("Happy New Year")



//whileloop
var counter=3
while(counter>0){
    console.log(counter)
    counter=counter-1
}
console.log('Happy New Year')



//nested loop
for(var i=1;i<=2;i++){
    for (var j=1; j<=5; j++){
        console.log("Week"+i+"Day"+j)
    }
}



for(var year=2023;year<=2025;year++){
    console.log(year)
    for (var month=6; month<9; month++){
        console.log("......", month)
    }
}

function letterFinder(word, match){
    for(var i=0;i<word.length;i++){
       if(word[i]==match){
        console.log('Found',match,'at',i)
       }
       else{
        console.log('---No match found at',i)
       }
    }
}
letterFinder("test","t")


var clothes=[];
clothes.push("Hoodie");
clothes.push('blue t-shirt'); 
clothes.push('yellow t-shirt');
clothes.push('slippers');
clothes.push('old jeans');
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);
console.log(clothes)


var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);