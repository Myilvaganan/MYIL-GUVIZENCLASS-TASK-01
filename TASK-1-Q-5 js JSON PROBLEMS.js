
/*GUVI ZENCLASS FULL STACK DEVELOPMENT - BOOTCAMP
JAVASCRIPT LEARNING
BY MYILVAGANAN S 
JSON OBJECTS*/

//-----------------------------------

//PROBLEM -1 

var cat = {
    name: 'Fluffy',

    activities: ['play', 'eat cat food'],

    catFriends: [

    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'

    }, 

    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }

    ]

}

//1 --> added weight and height

cat.weight = 7;
cat.height= 5;

console.log(cat);

//2 --> changed the name spelling

cat.name='Fluffyy';
console.log(cat);

//3 --> iterated to get the Fluffyy's catFriends activities

var obj= cat.catFriends;
for(i in obj){
console.log(obj[i]['activities']);
}

//4 --> iterated to get catFriends names

var obj= cat.catFriends;
for(i in obj){
console.log(obj[i]['name']);
}

//5 --> total weight of catFriends

var obj= cat.catFriends;
var sum= 0;
for(i in obj){
sum= sum + obj[i]['weight'];
}
console.log(sum);

//6 --> total activities of all cats


var a= cat['activities'].length;
var obj= cat.catFriends;
for(i in obj){
  a= a + (obj[i]['activities'].length);
}
console.log(a);

// 7--> Adding 2 more activities to bar & foo cats

cat.catFriends[0].activities[2] = 'Bird watching';
cat.catFriends[0].activities[3] = 'hiding under desk';
cat.catFriends[1].activities[2] = 'fish catching';
cat.catFriends[1].activities[3] = 'playing with grass';

console.log(cat);

//8--> update the fur color of bar

cat.catFriends[0].furcolor= "Green";
console.log(cat);


//problem-2


var myCar = {

    make: "Bugatti",
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [

    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },

    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },

    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }

    ]
}


// 1-->  Loop over the accidents array. Change atFaultForAccident from true to false.


var car= myCar.accidents;

for (let i in car){
   
    car[i]['atFaultForAccident']= false;
  
}

console.log(myCar);

// 2--> Print the dated of my accidents


var car= myCar.accidents;

for (let i in car){
   
    console.log(car[i]['date']);
  
}


//problem-3

var object = {name: "RajiniKanth", age: 33, hasPets : false};

function printAllValues(obj) {

    console.log(Object.values(obj));

} 

printAllValues(object);

//problem-4

var object = {name: "RajiniKanth", age: 33, hasPets : false};

function printAllValues(obj) {

    console.log(Object.keys(obj));

} 

printAllValues(object);

//problem-5


var obj = {name: "ISRO", age: 35, role: "Scientist"};
    function convertListToObject(obj) {
     
      var arr= Object.entries(obj);
      console.log(arr);

    }
convertListToObject(obj);


//problem-6


var arr = ["GUVI", "I", "am", "Geek"];
var obj={};
function transformFirstAndLast(arr) {
     
    return obj[arr[0]] = arr[arr.length-1];
   }


transformFirstAndLast(arr);
console.log(obj);


//problem-7

var arr= [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]; 

function fromListToObject(arr) {
    var obj={};

for(i=0;i<arr.length;i++){
  
  for(j=0;j<arr[i].length;j++){
 
       obj[arr[i][j]]= arr[i][j+1];
       break;
  }
}

  console.log(obj);
}

fromListToObject(arr);


//problem-08

var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];



function transformEmployeeData(arr) {
var obj, array=[],key,value;
    for(i=0;i<arr.length;i++){
      obj={};
        for(j=0;j<arr[i].length;j++){
          for(k=0;k<arr[i][j].length-1;k++){             
                  key= arr[i][j][k];
                  value= arr[i][j][k+1];
                  obj[key]=[value]; 
          }            
        }
 
array.push(obj);
    }
 return array;
}
console.log(transformEmployeeData(arr));

//problem-09

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
var testName= "detects that two objects are equal";

function assertObjectsEqual(actual, expected, testName){
  
      var jsonObjectsExpected= JSON.stringify(expected);
      var jsonObjectsActual= JSON.stringify(actual);
      if(testName === "detects that two objects are equal"){
      if(jsonObjectsExpected === jsonObjectsActual){
        return "PASSED";
      }else{
        return "FAILED"
      }
      }else{
        return "FAILED"
      }
 } 


console.log(assertObjectsEqual(actual,expected,testName));



//problem-10

var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
]


function chksecurityQuestions(securityQuestions,ques,ans) {
    
    for(i=0;i<securityQuestions.length;i++){

        var a= securityQuestions[i];
       
         if(a.question === ques){
       
                if(a.expectedAnswer === ans){
                   return true;
                }else
                {
                   return false;
                }
          }
       
       }

}

//TestCase:01
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true


//TestCase:02
var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // false 



//problem-11

var students = [
    {
    name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];



function returnMinors(arr){
    var minorStudents = []; 
    for(i=0;i<students.length;i++){
    var a = students[i];      
    var c = a.age < 20 ? minorStudents.push(a.name) : null ;           
}
    return minorStudents;
}

console.log(returnMinors(students));  











