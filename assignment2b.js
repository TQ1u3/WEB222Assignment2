/*******************************************************************************
 *                     WEB222 â€“ Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca 
 * Academic Policy.  No part of this assignment has been copied manually or 
 * electronically from any other source (including web sites) or distributed to 
 * other students.
 * 
 * Name: Tianjing Qiu  Student ID:141813188  Date: 2019-10-04
 *
 ******************************************************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob+
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
var lastObj = courses.pop();
console.log("Course " + lastObj.code + " was deleted from the array (courses)");
console.log("Adding new course objects into the array (courses)\n");

var ibc233 = { code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://cs.senecac.on.ca/~ibc233/' };
var oop244 = { code: 'OOP244', name: 'Introduction to Object Oriented Programing', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/' };
var web222 = { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~web222/' };
var dbs201 = { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201/' };
courses.push(ibc233,oop244,web222,dbs201);
console.log('\nCourse objects in the array (courses):');

for (let i = 0; i < courses.length; i++) {
    console.log(`${courses[i].code}, ${courses[i].name}, ${courses[i].hours} hours/week, website: ${courses[i].url}`);
}

// task 2

var student1 = Object.create(student);
var student2 = Object.create(student);
var student3 = Object.create(student);
var student4 = Object.create(student);

student1.name = 'John Smith'; 
student2.name = 'Jim Carrey';
student3.name ='Justin Bieber';
student4.name = 'Justin Trudeau';
student1.dob = "9/10/1999";
student2.dob = "1/17/1992";
student3.dob = "3/1/1994";
student4.dob = "1/12/1992";
student1.sid = '010456101';
student2.sid = '012345678';
student3.sid = '0987654321';
student4.sid = '123456789';
student1.program = 'CPA';
student2.program = 'CPD';
student3.program = 'CAN';
student4.program = 'CAN';
student1.gpa = 4;
student2.gpa = 3.5;
student3.gpa = 3;
student4.gpa = 4;

var students = [student1, student2, student3, student4];
console.log("Student objects in the array (students):");
var i = 0;
students.forEach(function(info)
{   console.log(i + ": " + info.toString());
    i++;
});