import React from 'react'
import Menu from "./Menu.js"
import List from "./List.js"


class App extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			pelis:[
				{
					"id":"1" ,
					"rating":"5",
					"descripcion":"Un grupo de cuatro personas resuelve problemas",
					"titulo":"Los simuladores",
					"genero":"suspenso",
					"imagen" : "https://www.infobae.com/new-resizer/lzXKAB6sDdWSAL6QzWTB_BP-G9E=/420x236/filters:format(jpg):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/LS3BQREYLJFCPD5EGVXASETLVM.jpg"
				},{
					"id":"2" ,
					"rating":"5",
					"descripcion":"Dos chantas queiren cagarle un millon de verdes a un gallego careta",
					"titulo":"Nueve Reinas",
					"genero":"suspenso - accion",
					"imagen":"https://i0.wp.com/sinmordaza.com/wp-content/uploads/2020/08/SM-NUEVE-REINAS.jpg?fit=696%2C464&ssl=1"
				},{
					"id":"3" ,
					"rating":"3",
					"descripcion":"Un grupo de gente que se vuelve loca con hilarantes situaciones",
					"titulo":"Relatos Salvajes",
					"genero":"comedia negra",
					"imagen":"http://www.telam.com.ar/advf/imagenes/editadas/54b7c44bedf17_645x430.jpg"
				},{
					"id":"4" ,
					"rating":"2",
					"descripcion":"Una familia piensa que murio la abuela pero se habian equivocado",
					"titulo":"Esperando la Carroza",
					"genero":"comedia ",
					"imagen":"https://cinefiloserial.com.ar/wp-content/uploads/2018/05/esperando-la-carroza-800x445.jpg"
				}
			]
		}



	}


	render(){
		return(
				<div className="app">
					<Menu/>
					<List items={this.state.pelis}/>
				</div>

			)
	}
}

export default App;