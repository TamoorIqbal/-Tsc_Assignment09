var Q1 = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var myContainer = document.getElementById("output1");
    myContainer.innerHTML = Object.keys(student).toString();
};
var Q2 = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var myContainer = document.getElementById("output2");
    myContainer.innerHTML += "Before Deleted :" + Object.keys(student).toString();
    delete student["rollno"];
    myContainer.innerHTML +=
        "</br>After Deleted :" + Object.keys(student).toString();
};
var Q3 = function () {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    var myContainer = document.getElementById("output3");
    myContainer.innerHTML =
        "The Length Of A TypeScript Object is <br>" + Object.keys(student).length;
};
var Q4 = function () {
    var library = [
        {
            Author: "Bill Gates",
            Title: "The Road Ahead",
            ReadingStatus: true
        },
        {
            Author: "Steve Jobs",
            Title: "Walter Isaacson",
            ReadingStatus: true
        },
        {
            Author: "Suzanne Collins",
            Title: "Mockingjay: The Final Book Of The Hunger Games",
            ReadingStatus: false
        },
    ];
    for (var i = 0; i < library.length; i++) {
        var myContainer = document.getElementById("output4");
        myContainer.innerHTML +=
            "Title :" +
                library[i].Title +
                "<br>" +
                "Author :" +
                library[i].Author +
                "<br>" +
                "ReadingStatus :" +
                library[i].ReadingStatus +
                "<br><br>";
    }
};
var Q5 = function () {
    var height = prompt("Please Enter Height", "7");
    var diameter = prompt("Please Enter Diameter", "4");
    if (height && diameter) {
        var Cylinder = /** @class */ (function () {
            function Cylinder() {
            }
            Cylinder.prototype.volume = function (height, diameter) {
                var radius = diameter / 2;
                return height * Math.PI * radius * radius;
            };
            return Cylinder;
        }());
        var obj = new Cylinder();
        var myContainer = document.getElementById("output5");
        myContainer.innerHTML = "Volume of the cylinder with four decimal places is :<br>" +
            obj.volume(Number(height), Number(diameter)).toFixed(4);
    }
};
var Q6 = function () {
    var _a;
    var num = parseInt(prompt("Enter number of elements"));
    var array = [100];
    for (var x = 0; x < num; x++)
        array[x] = parseInt(prompt("Enter " + num + " integers"));
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
            }
        }
    }
    var myContainer = document.getElementById("output6");
    myContainer.innerHTML =
        "Sorted Array in ascending order is :" + array;
};
var Q7 = function () {
    var str = prompt("Please Enter String");
    var subString = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length + 1; j++) {
            subString.push(str.slice(i, j));
        }
    }
    var myContainer = document.getElementById("output7");
    myContainer.innerHTML =
        str + "subString is :" + subString;
};
var Q8 = function () {
    var x = new Date();
    var myContainer = document.getElementById("output8");
    myContainer.innerHTML += x.getHours() + ' :' + x.getMinutes() + ' :' + x.getSeconds() + '<br>';
};
var Q10 = function () {
    var library = [
        {
            title: 'The Road Ahead',
            author: 'Bill Gates',
            libraryID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            libraryID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }
    ];
    var sortedlibrary = library.sort(function (a, b) { return (a.libraryID > b.libraryID) ? -1 : 1; });
    var myContainer = document.getElementById("output10");
    myContainer.innerHTML = JSON.stringify(sortedlibrary);
};
var Q13 = function () {
    var object1 = {
        a: 1,
        b: 2,
        c: 3
    };
    var myContainer = document.getElementById("output13");
    myContainer.innerHTML += JSON.stringify(Object.getOwnPropertyNames(object1));
};
var Q14 = function () {
    var object1 = {
        a: 1,
        b: 2,
        c: 3
    };
    var myContainer = document.getElementById("output14");
    myContainer.innerHTML += JSON.stringify(Object.values(object1));
};
var Q15 = function () {
    var obj = {
        "1": 5,
        "2": 7,
        "3": 0,
        "4": 0,
        "5": 0
    };
    var myContainer = document.getElementById("output15");
    myContainer.innerHTML += JSON.stringify(Object.entries(obj));
};
var Q16 = function () {
    var obj = {
        "1": 5,
        "2": 7,
        "3": 0,
        "4": 0,
        "5": 0
    };
    var myContainer = document.getElementById("output16");
    myContainer.innerHTML += JSON.stringify(Object.entries(obj));
};
var Q17 = function () {
    var std = {
        name: 'moon',
        "class": 'BSCS',
        rollno: 5
    };
    if (std.name !== undefined) {
        // now string
        var myContainer = document.getElementById("output17");
        myContainer.innerHTML += (std.name.toLowerCase());
    }
};
