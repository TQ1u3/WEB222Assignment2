/*******************************************************************************
 *                     WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy.  No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students.
 * 
 * Name: Tianjing Qiu  Student ID:141813188  Date: 2019-10-04
 *
 ******************************************************************************/

var people = [{"id":1,"first_name":"Austin","last_name":"Crowdson","Gender":"Male","birthDate":"12/12/2018","email":"acrowdson0@twitter.com","web":"https://independent.co.uk","creditScore":693,"rating":10.6},
{"id":2,"first_name":"Bernardo","last_name":"Croal","Gender":"Male","birthDate":"4/10/2019","email":"bcroal1@51.la","web":"https://reddit.com","creditScore":359,"rating":13.74},
{"id":3,"first_name":"Carney","last_name":"Hatterslay","Gender":"Male","birthDate":"9/9/2019","email":"chatterslay2@simplemachines.org","web":"http://princeton.edu","creditScore":750,"rating":18.97},
{"id":4,"first_name":"Franklin","last_name":"Colvill","Gender":"Male","birthDate":"3/4/2019","email":"fcolvill3@umn.edu","web":"https://loc.gov","creditScore":629,"rating":3.38},
{"id":5,"first_name":"Ddene","last_name":"O'Carran","Gender":"Female","birthDate":"10/3/2019","email":"docarran4@about.com","web":"https://liveinternet.ru","creditScore":452,"rating":15.19},
{"id":6,"first_name":"Louie","last_name":"Seavers","Gender":"Male","birthDate":"4/24/2019","email":"lseavers5@zdnet.com","web":"http://telegraph.co.uk","creditScore":608,"rating":15.79},
{"id":7,"first_name":"Brena","last_name":"Roskelley","Gender":"Female","birthDate":"9/26/2019","email":"broskelley6@dagondesign.com","web":"http://npr.org","creditScore":257,"rating":9.93},
{"id":8,"first_name":"Keane","last_name":"Fahey","Gender":"Male","birthDate":"9/18/2019","email":"kfahey7@ustream.tv","web":"https://rediff.com","creditScore":531,"rating":15.34},
{"id":9,"first_name":"Mel","last_name":"Creber","Gender":"Female","birthDate":"11/18/2018","email":"mcreber8@eepurl.com","web":"https://apache.org","creditScore":666,"rating":19.53},
{"id":10,"first_name":"Minor","last_name":"Copplestone","Gender":"Male","birthDate":"8/17/2019","email":"mcopplestone9@xinhuanet.com","web":"http://hexun.com","creditScore":518,"rating":17.26},];

//Task 1
function capNotFirstLetter(string){ 
   var first = (string.substring(0,1)).toLowerCase();
   var rest = (string.substring(1, string.length)).toUpperCase();
   var newname = first + rest;
   return newname; 
}

//Tasks 2

var firstname = people.map(p=>p);
var fname = firstname.map(p => capNotFirstLetter(p.first_name));
console.log(fname); 

//Tasks 3
var credit = firstname.filter(f => f.creditScore > 400);
console.log(credit);

//Task 4
firstname.sort(function(a,b){return new Date (a.birthDate) - new Date(b.birthDate)});
console.log(firstname);


