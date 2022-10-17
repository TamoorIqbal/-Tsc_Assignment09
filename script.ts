var Q1 = () => {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12,
    };
    let myContainer = <HTMLElement>document.getElementById("output1");
    myContainer.innerHTML = Object.keys(student).toString();
};
var Q2 = () => {
    interface student {
        name: string;
        sclass: string;
        rollno?: number;
    }
    var student: student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12,
    };
    var myContainer = <HTMLElement>document.getElementById("output2");
    myContainer.innerHTML += "Before Deleted :" + Object.keys(student).toString();
    delete student["rollno"];
    myContainer.innerHTML +=
        "</br>After Deleted :" + Object.keys(student).toString();
};

var Q3 = () => {
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12,
    };
    var myContainer = <HTMLElement>document.getElementById("output3");
    myContainer.innerHTML =
        "The Length Of A TypeScript Object is <br>" + Object.keys(student).length;
};

var Q4 = () => {
    var library = [
        {
            Author: "Bill Gates",
            Title: "The Road Ahead",
            ReadingStatus: true,
        },
        {
            Author: "Steve Jobs",
            Title: "Walter Isaacson",
            ReadingStatus: true,
        },
        {
            Author: "Suzanne Collins",
            Title: "Mockingjay: The Final Book Of The Hunger Games",
            ReadingStatus: false,
        },
    ];
    for (var i = 0; i < library.length; i++) {
        var myContainer = <HTMLElement>document.getElementById("output4");
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

var Q5 = () => {
    var height: string | null = prompt("Please Enter Height", "7");
    var diameter: string | null = prompt("Please Enter Diameter", "4");
    if (height && diameter) {
        class Cylinder {
            volume(height: number, diameter: number): number {
                var radius = diameter / 2;
                return height * Math.PI * radius * radius;
            }
        }
        var obj = new Cylinder();
        var myContainer = <HTMLElement>document.getElementById("output5");
        myContainer.innerHTML = "Volume of the cylinder with four decimal places is :<br>" +
            obj.volume(Number(height), Number(diameter)).toFixed(4);
    }
};

var Q6 = () => {
    var num: number = parseInt(prompt("Enter number of elements")!);
    var array: number[] = [100];
    for (let x = 0; x < num; x++)
        array[x] = parseInt(prompt("Enter " + num + " integers")!);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    var myContainer = <HTMLElement>document.getElementById("output6");
    myContainer.innerHTML =
        "Sorted Array in ascending order is :" + array;
};

var Q7 = () => {
    var str: string = prompt("Please Enter String")!;
    var subString: string[] = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length + 1; j++) {
            subString.push(str.slice(i, j));
        }
    }
    var myContainer = <HTMLElement>document.getElementById("output7");
    myContainer.innerHTML =
        str + "subString is :" + subString;
};
var Q8 = () => {
    var x = new Date()
    var myContainer = <HTMLElement>document.getElementById("output8");
    myContainer.innerHTML += x.getHours() + ' :' + x.getMinutes() + ' :' + x.getSeconds() + '<br>'
};

var Q10 = () => {
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
        }];
    let sortedlibrary = library.sort((a, b) => (a.libraryID > b.libraryID) ? -1 : 1);
    var myContainer = <HTMLElement>document.getElementById("output10");
    myContainer.innerHTML = JSON.stringify(sortedlibrary);
};

var Q13 = () => {
    const object1 = {
        a: 1,
        b: 2,
        c: 3
    };
    var myContainer = <HTMLElement>document.getElementById("output13");
    myContainer.innerHTML += JSON.stringify(Object.getOwnPropertyNames(object1));
};
var Q14 = () => {
    const object1 = {
        a: 1,
        b: 2,
        c: 3
    };
    var myContainer = <HTMLElement>document.getElementById("output14");
    myContainer.innerHTML += JSON.stringify(Object.values(object1));
};

var Q15 = () => {
    var obj = {
        "1": 5,
        "2": 7,
        "3": 0,
        "4": 0,
        "5": 0
    };

    var myContainer = <HTMLElement>document.getElementById("output15");
    myContainer.innerHTML += JSON.stringify(Object.entries(obj));
};

var Q16 = () => {
    var obj = {
        "1": 5,
        "2": 7,
        "3": 0,
        "4": 0,
        "5": 0
    };
    var myContainer = <HTMLElement>document.getElementById("output16");
    myContainer.innerHTML += JSON.stringify(Object.entries(obj));
};

var Q17 = () => {
    type Student = {
        name?: string;
        class?: string;
        rollno?: number;
    };
    const std: Student = {
        name: 'moon',
        class: 'BSCS',
        rollno: 5,
    };
    if (std.name !== undefined) {
        // now string
        var myContainer = <HTMLElement>document.getElementById("output17");
        myContainer.innerHTML += (std.name.toLowerCase());
    }
};




