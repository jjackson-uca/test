<script>
	import { onMount } from 'svelte';

	/*
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

    const coolColors = {
        red: "#FF0000", 
        blue: "#0000FF",
        green: "#00FF00"
    }

    coolColors.red;

    const lameColors = {
        lightRed: "#550000",
        lightOrange: "#552525"
    }

    const allColors = {...coolColors, ...lameColors}

    const JoesColors = {
        favColors: coolColors,
        okColors: lameColors
    }



    console.log(JoesColors.favColors.red)

    console.log(allColors, JoesColors); 

    stuff["prop1"]

    class Stuff{
        prop01

        constructor(){

        }
    }

    class musicPreferences {
        favGenres
        top10Bands

    }


    class Person{
        id
        name
        bday
        musicStuff
    }

    let newStuff = new Stuff(); 

    console.log(newStuff); 

    let newnewStuff = {...stuff, ...newStuff}; 
    console.log(newnewStuff);

    let e = [0,2,4,6,8];
    let o = [1,3,5,7,9]; 
    let a = [...e, ...o]
    //[0,2,4,5,8,1,3,5,7,9]
    a.sort((a, b)=>{
        return a-b; 
    });
    console.log(a); 
    //[0,1,2,3,4,5,6,7,8,9]


    console.log(newnewStuff); 

    let str = JSON.stringify(newnewStuff);
    console.log(str); 
    
    let obj = JSON.parse(str); 
    console.log(obj); 

    //Arrays

    let arr = [9, 6, 3, 3, 4, 1, 6, 3, 8, 9] //<= push(10)
    //index =  0  1  2  3  4  5  6  7  8  9
    //               ^
    
    let long = arr.push(10);
    let length = arr.length;
    let agg = 0; 
    let small = []; 
    arr.forEach((elem)=>{
        console.log(elem); 
        if(elem<5){
            small.push(elem); 
        }
    })

    arr.fill(0, 0, 20); 

    arr.at(0); // same as arr[0]; 

    let bigElems = arr.filter((elem)=>{
        return (elem>5)
    })

    

    //[9, 6, 6, 8, 9]

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





  const name = 'Joe "the man" Stan'; 

  const name2 = `Joe 'the man' Stan`

  const knickName = 'the dude'
  const fullName = `Joe '${knickName}' Stan`


  let o1 = {
    number1band: "",
    number2band: "",
    number3band: "",
    number4band: "",
    number5band: "",
    number6band: "",
    number1movie: "",
    number2movie: ""
  }

  let catagory = "band"
  for(let i = 1; i<7; i++){
    o1[`number${i}${catagory}`] //o1['number4band']
  }
  catagory = "movie"
  for(let i = 1; i<7; i++){
    o1[`number${i}${catagory}`]
  }

*/

	let o2 = {
		number1band: '',
		number2band: '',
		number3band: '',
		number4band: '',
		number5band: '',
		number6band: '',
		number1movie: '',
		number2movie: ''
	};

	console.log(o2);

	let str2 = JSON.stringify(o2);

	console.log(str2);

	//console.log(JSON.parse(o2));
	try {
		//setup risky

		//try the risky
		console.log(JSON.parse(o2));
	} catch (e) {
		//what do if broke
		//dont care
	} finally {
		//no matter what happens, this next (usually cleanup)
	}

	console.log('hurray we kept goin');
    
    /**
     * @type HTMLUListElement
     */
    let List;

	onMount(() => {
		document.getElementById('go').addEventListener('click', go);
        List = document.getElementById('Kan'); 
	});

	let times = 0;

	async function go(t, e) {
		getWeather(35.091346, -92.456199);
        getRadioStations(); 
        getDnDSpells(); 
        getKanyeRest(); 
		printout();
	}

    async function getKanyeRest(){
        const url = `https://api.kanye.rest/`
        const resonse = await fetch(url, {
            method: 'GET',
        })
        let data = await resonse.json(); 
        console.log(data); 
        let li = document.createElement('li'); 
        li.innerText = data.quote; 
        List.appendChild(li); 
    }

    async function getDnDSpells(){
        const url = `https://api.open5e.com/v1/spells/?format=json`
        const response = await fetch(url, {
            method: 'GET',
        })
        let data = await response.json(); 
        console.log(data); 
    }

    async function getRadioStations() {
        const url = `http://de1.api.radio-browser.info/json/stations/topclick`
        const response = await fetch(url, {
            method: 'GET',
            
        }); 
        let data = await response.json(); 
        console.log(data.filter(station => {
            return station.countrycode === "US";
        })); 
    }

	async function getWeather(lat, lon) {
		const url = `https://api.weather.gov/points/${lat},${lon}`;
		console.log(url);
		const response = await fetch(url, {
			method: 'GET'
		});
		let w = await response.json();
		console.log(w);
		console.log(w.properties.forecast);
		const response2 = await fetch(w.properties.forecast, {
			method: 'GET'
		});
		let f = await response2.json();
		console.log(f);
	}

	async function printout() {
		console.log(`button clicked ${times} times`);
	}
</script>

<button id="go" type="button">Press to Go</button>
<ul id='Kan'>

</ul>
