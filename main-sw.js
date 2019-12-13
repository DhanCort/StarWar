


class App{

	constructor(){}


	async getPeopleByName(){
		const people = await fetch('https://swapi.co/api/people/')

		return people.json()
	}


	evento(item){

		var ctn = document.querySelector("#valores")
		ctn.innerHTML = ""

		//NOMBRE
		var h1 = document.querySelector("h1")
		h1.innerHTML = item.name

		console.log(item)
		const url_h = item.homeworld
		const url_s = item.species[0];
		var url_v = item.vehicles
		const long_v = url_v.length
		var url_st = item.starships
		const long_st = url_st.length

		
		var arreglo = Object.values(item)
		var ctn = document.querySelector("#valores")
		for(var i=0;i<8;i++){
			var label = document.createElement("label");
			label.innerHTML = arreglo[i];
			ctn.appendChild(label)
		}



		var boton1 = document.getElementById("1");
		//boton1.innerHTML = "Personal";
		//document.querySelector("body").appendChild(boton1)
		boton1.addEventListener("click", () =>{
			h1.innerHTML = item.name
			var arreglo = Object.values(item)
			ctn.innerHTML =""
			for(var i=0;i<8;i++){
			var label = document.createElement("label");
			label.innerHTML = arreglo[i];
			ctn.appendChild(label)
		}

		})


		var boton2 = document.getElementById("2");
		//document.querySelector("body").appendChild(boton2)
		//boton2.innerHTML = "Homeworld";
		boton2.addEventListener("click",()=>{
			this.getHomeworld(url_h).then(planeta =>{
			h1.innerHTML = planeta.name
			var hogar = Object.values(planeta)
			ctn.innerHTML =""
			for(var i=0;i<9;i++){
			var label = document.createElement("label");
			label.innerHTML = hogar[i];
			ctn.appendChild(label)
			}

			})

		})


		var boton3 = document.getElementById("3");
		//document.querySelector("body").appendChild(boton3)
		//boton3.innerHTML = "Species";
		boton3.addEventListener("click", ()=>{
			this.getSpecie(url_s).then(especie =>{
			h1.innerHTML = especie.name
			var raza = Object.values(especie);
			ctn.innerHTML =""
			for(var i=0;i<11;i++){
			var label = document.createElement("label");
			label.innerHTML = raza[i];
			ctn.appendChild(label)
			}

			})

		})


		var boton4 = document.getElementById("4");
		//document.querySelector("body").appendChild(boton4)
		//boton4.innerHTML = "Vehicles";
		boton4.addEventListener("click", ()=>{
			if(long_v > 0){
			url_v = item.vehicles[0]
			this.getVehicles(url_v).then(vehiculo =>{
			var vehiculos = Object.values(vehiculo);
			h1.innerHTML = vehiculos[0]
			ctn.innerHTML =""
			for(var i=0;i<12;i++){
			var label = document.createElement("label");
			label.innerHTML = vehiculos[i];
			ctn.appendChild(label)
			}
					
			})

		}else{
			h1.innerHTML = "N/A"
			ctn.innerHTML = ("Sin Informacion")
			}

		})


		var boton5 = document.getElementById("5");
		//document.querySelector("body").appendChild(boton5)
		//boton5.innerHTML = "Starships";
		boton5.addEventListener("click", ()=>{
			if(long_st > 0){
			url_st = item.starships[0]
			this.getStarships(url_st).then(starships =>{
			h1.innerHTML = starships.name
			var nave = Object.values(starships);
			ctn.innerHTML =""
			for(var i=0;i<14;i++){
			var label = document.createElement("label");
			label.innerHTML = nave[i];
			ctn.appendChild(label)
			}

			})

			}else{
				h1.innerHTML = "N/A"
				ctn.innerHTML = ("Sin Informacion")
				}

			
			})

		


		//this.getSpecie(url_s).then(especie =>{
		//	console.log(especie)
		//})

		//this.getHomeworld(url_h).then(planeta =>{
		//	console.log(planeta)
		//})

		/*
		if(long_v > 0){
			url_v = item.vehicles[0]
			this.getVehicles(url_v).then(vehiculo =>{
			console.log(vehiculo)
		})

		}else{
			console.log("No cuenta con Vehiculo")
		}*/


		/*
		if(long_st > 0){
			url_st = item.starships[0]
			this.getStarships(url_st).then(starships =>{
			//console.log(starships)
		})

		}else{
			console.log("No cuenta con Nave")
		}
*/
		
	}


	getPerson(array){
		array.results.forEach(item=>{
			var btn = document.createElement("button");
			btn.innerHTML = item.name;
			btn.addEventListener("click", ()=>{this.evento(item)} )
			document.querySelector("#contenedor11").appendChild(btn)			
		})
		
	}

	async getHomeworld(url){
		const planeta = await fetch(url)

		return planeta.json()
	}

	async getSpecie(url){
		const especie = await fetch(url)

		return especie.json()
	}

	async getVehicles(url){
		const vehiculos = await fetch(url)

		return vehiculos.json()
	}

	async getStarships(url){
		const starships = await fetch(url)

		return starships.json()
	}

	llamar(){
		this.getPeopleByName().then(this.getPerson.bind(this))
		
	}
}


var app = new App();

app.llamar()

