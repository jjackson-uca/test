class Person{
	id: number | string
	firstName: string
	lastName: string

	constructor(name: string){
		this.id = Math.random()*1000
		//name = "joseph, jackson" splitting -> ["joseph", " jackson"]
		this.firstName = name.split(',')[0].trim(); 
		this.lastName = name.split(',')[1].trim(); 
	}

	getId(){
		return this.id; 
	}

	getName(){
		return this.firstName+', '+this.lastName; 
	}
}

class Student extends Person{
	studentId: string
	gpa: string
	constructor(name: string){
		super(name); 
	}

}

class Teacher extends Person{
	teacherId: string

	constructor(name: string){
		super(name); 
	}
}

function printName(p: Person){
	console.log(p.getName()); 
}

function getUniId(x: Student | Teacher){
	if(x instanceof Student){
		console.log(x.getName())
		console.log(x.studentId); 
	}
	if(x instanceof Teacher){
		console.log(x.teacherId); 
	}
}


let p = new Person('john, smith'); 
let s = new Student('Jane, Doe'); 
let t = new Teacher('Joe, Jackson'); 

printName(p); 
printName(s); 
printName(t); 

getUniId(s); 
getUniId(t); 