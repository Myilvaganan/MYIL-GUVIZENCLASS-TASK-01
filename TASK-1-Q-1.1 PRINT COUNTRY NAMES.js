var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function (){
    var data= JSON.parse(this.response);
    console.log(data);
//Task-1-- Ques-1 --> Loading the rest countries data using html and script.js file and 
//printing all the country names using for...in..loop
            for( let i in data){
                console.log(data[i].name);
            }
}