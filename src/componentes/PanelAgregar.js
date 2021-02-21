import React from 'react'


class PanelAgregar extends React.Component{
	
	constructor(props){
        super(props);

		this.state={
			titulo:"",
			desc:"",
			calif:1,
			Img:""
		};
		
        
    }

	setCalificacion = (e) =>{
		this.setState({calif: e.target.setCalificacion})
	}

	setTitulo = (e) =>{
		this.setState({titulo: e.target.setTitulo})
	}

	setImg = (e) =>{
		this.setState({img: e.target.setImg})
	}

	setDescripcion = (e) =>{
		this.setState({desc: e.target.setDescripcion})
	}


	// valor = () => {
	// 	document.getElementById('range')
	// }


	render(){
			return(
					<div className="addPelicula-contenedor">
					<form className="addPelicula">
						<p>Titulo</p>
						<input onChange={this.setTitulo} ></input>
						<p>Descripcion</p>
						<input onChange={this.setDescripcion} ></input>
						<p>Calificacion:{this.setCalificacion} </p>
						<input type="range"  min="1" max="5" id="range" onChange={this.setCalificacion}></input> 
						
						<p>Imagen</p>
						<input  placeholder="Insetar la URL" onChange={this.setImg} ></input>
					</form>	
						
						
						<button onClick={this.props.agregar}>Agregar</button>
						<button onClick={this.props.cancelar}>Cancelar</button>
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