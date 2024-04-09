<script>
	let variable = 5;

	//console.log(variable);

	let doubleIt = (x) => {
		return x * 2; //double the current value of variable
		/* Math Symbols
        * multiply
        / divide
        + add
        - sub
        % modulo ex: 
                        10%3 = 1
                        10 / 3 = 3 Remainder 1
    */
	};

	//console.log(doubleIt(20));

	// new function!
	/*  <= 1, 2, 3, 4, 5, 6, 7, 8, 9
    {
        (let a = 1; 
        let b = 2; 
        let c = 3; 
        let d = 4; 
        let e = 5;)

    }
  */

	function aggregate(a, b, c, d, e) {
		console.log(a, b, c, d, e);
		return a + b + c + d + e;
	}

	console.log(aggregate(1, 2, 3, 4, 5, 6, 7, 8, 9));

	//void functions don't return anything!

	function sayHello() {
		console.log('Hello');
		return;
	}

	variable = 30;

	if (variable > 20) {
		console.log('it big');
	} else {
		console.log('it smol');
	}

	//ternary
	variable > 20 ? console.log('it big') : console.log('it smol');

	//Switches
	let day = new Date().getDay(); //returns numeral of the day, 0=Sunday - 6=Saturday
	let text = '';
	switch (day) {
		case 1:
		case 2:
			text = 'missing the weekend bad';
			break;
		case 3:
			text = "it's hump day!";
			break;
		case 4:
		case 5:
			text = 'weekend is coming soon';
			break;
		case 0:
		case 6:
			text = 'It is the Weekend!';
			break;
		default:
			console.log(text);
	}
	console.log(text);

	//loops
	let x = 10;
	while (x > 0) {
		console.log(x);
		x = x - 1;
	}

	do {
		x = x - 1;
		console.log(x);
	} while (x > 0);

    let runningTotal = 0; 
	for (let x = 10; x > 0; x = x - 1) {
        runningTotal+=x;
		console.log(runningTotal);
	}

    console.log("STUFFFFF")

    const stuff = {
        prop1: "prop1",
        prop2: "prop2",
        prop3: "prop3",
        prop4: "prop4",
        prop5: "prop5",
        prop6: "prop6",
        prop7: "prop7",
        prop8: "prop8",
        prop9: "prop9"
    }

    class Stuff{
        prop01

        constructor(){

        }
    }

    let newStuff = new Stuff(); 

    console.log(newStuff); 

    let newnewStuff = {...stuff, ...newStuff}; 
    console.log(newnewStuff);

    let e = [0,2,4,6,8];
    let o = [1,3,5,7,9]; 
    let a = [-1,e,o,-2]; 
    console.log(a); 


    console.log(newnewStuff); 

    let str = JSON.stringify(newnewStuff);
    console.log(str); 
    
    let obj = JSON.parse(str); 
    console.log(obj); 

    //Arrays

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for(let num in arr){
        console.log(num);
    }

    arr.forEach((num)=>{
        console.log(num);
    })


    console.log("newArray Stuff"); 

    let newArray = [];
    newArray.push(1);
    newArray.push(2);
    newArray.push(3);
    newArray.push(4);
    newArray.push(5);
    newArray.push(6);
    console.log(newArray); 
    console.log(newArray.pop());
    console.log(newArray.pop());
    console.log(newArray.pop());
    console.log(newArray.pop());
    console.log(newArray.pop());
    console.log(newArray); 

    console.log(newArray[2]);

    newArray = [0, 1, 2, 3, 4];  
    newArray.push("Hello"); 

    console.log(newArray); 

    newArray = []; 
    newArray.push("Sarah"); 
    newArray.push(98);
    newArray.push("Enrique"); 
    newArray.push(67);
    newArray.push("Jacob");
    newArray.push(0);

    console.log(newArray); 

    console.log(newArray.filter(elem=>{
        return elem=="Sarah";
    })); 


    //objects
    let student = {
        name: '',
        grade: 0
    }

    Object.keys(student); 


    newArray = []; 
    newArray.push({name: 'Sarah', grade: 98}); 
    newArray.push({name: 'Enrique', grade: 67}); 
    newArray.push({name: 'Jacob', grade: 0}); 
    console.log(newArray); 
    console.log(newArray.filter(elem => {
        return elem.name == 'Sarah'
    }))
    console.log(Object.entries(newArray[0]));

    console.log(Object.entries(newArray[0])[0][1]);

</script>
