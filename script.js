//your JS code here. If rlet output = document.getElementById("output");
let p = new Promise((resolve,reject) =>{
	setTimeout=>(resolve("'Hello, world!'"),1000);
})
p.then((value)=>{
	output.innerHTML = value;
})