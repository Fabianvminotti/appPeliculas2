import React from 'react'
import Item from "./item.js"


function List (props){
	return(
			<div className="list">
				 {
					 props.items.map(item =>
						<Item 
						titulo={item.titulo}
						rating={item.rating}						
						descripcion={item.descripcion}
						titulo={item.titulo}
						genero={item.genero}
						imagen={item.imagen}
						/>
						)
				 }
			</div>  

		)
}

export default List;