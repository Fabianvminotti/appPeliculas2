import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class PanelAgregar extends React.Component{
	
	constructor(props){
        super(props);

		this.state={
			titulo:"",
			desc:"",
			rating:1,
			imagen:""
		};
		
        
    }

	setCalificacion = (e) =>{
		this.setState({calif: e.target.value})
	}

	setTitulo = (e) =>{
		this.setState({titulo: e.target.value})
	}

	setimagen = (e) =>{
		this.setState({imagen: e.target.value})
	}

	setDescripcion = (e) =>{
		this.setState({desc: e.target.value})
	}


	onSubmit = (e) =>{
		e.preventDefault();

		const titulo = this.state.titulo;
		const desc =  this.state.desc;
		const rating = this.state.rating;
		const imagen = this.state.imagen;

		this.props.onadd({titulo:titulo, imagen:imagen, rating:rating})
		

			

	}


	// valor = () => {
	// 	document.getElementById('range')
	// }


	render(){
			return(
					<div className="addPelicula">
					<form onSubmit={this.onSubmit} className="addPelicula">
						<p>Titulo</p>
						<input onChange={this.setTitulo} ></input>
						<p>Descripcion</p>
						<input onChange={this.setDescripcion} ></input>
						<p>Calificacion:{this.setCalificacion} </p>
						<input type="range"  min="1" max="5" id="range" onChange={this.setCalificacion}></input> 
						
						<p>Imagen</p>
						<input  placeholder="Insetar la URL" onChange={this.setimagen} ></input>
						
						<div className="actions">	
							<input type="submit" value="Agregar"></input>
							<button onClick={this.props.cancelar}> <FontAwesomeIcon icon={faTimes}/>     </button>
						</div>

					</form>	
						
						
						{/* <button onClick={this.props.agregar}>Agregar</button> */}
						
					</div>
					

				)
			}
}


// function PanelAgregar (props){
// 	return(
// 			<div>
// 			<form className="addPelicula">
// 				<p>Titulo</p>
// 				<input type="text" ></input>
// 				<p>Descripcion</p>
// 				<input type="text" ></input>
// 				<p>Calificacion: </p>
// 				<input type="range"  min="1" max="5" id="range"></input> 
// 				{/* <input value="1" onChange="document.getElementById('range').value=this.value" > </input> */}
// 				<p>Imagen</p>
// 				<input type="text"  placeholder="Insetar la URL" ></input>
// 			</form>	
				
				
// 				<button onClick={props.agregar}>Agregar</button>
// 				 <button onClick={props.cancelar}>Cancelar</button>
// 			</div>
			

// 		)
// }






export default PanelAgregar;