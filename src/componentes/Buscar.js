import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Buscar extends React.Component{

constructor(props){
	super(props);
}

buscandoEvento = (e)=>{ 
	const query = e.target.value.toString().toLowerCase();//esta funcion es para leer lo que se pone en el cuadro de busqueda y convertirlo a string y minuscula para prepararlo
	this.props.buscando(query); //aca se manda la lectura de la barra de busqueda al elemento buscando del componente padre de este

}

render(){ 
	return(
			<input type="text" placeholder="Buscar" onChange={this.buscandoEvento}>  
			
			</input>

			

		)
}
}

export default Buscar;