
import React from 'react'
import Buscar from "./Buscar"
import PanelAgregar from "./PanelAgregar"


class Menu extends React.Component{
		
		constructor(props){
			super(props)

			this.state={panelAgregar:false}

			this.add = this.add.bind(this);
		}
	
	
		add(){
			this.setState({panelAgregar:true})
		}
		render(){
			return(
					<div>
						<div className="menu">
							<div className="logo">

							</div>

							<div className="buscar">
								<Buscar/>
							</div>

							<div className="boton">
								<button onClick={this.add} className="agregar">Nuevo libro</button>
							</div>
						</div>

						{  /* esta es una forma particular del if */
							(this.state.panelAgregar)?
							<PanelAgregar/>
							:
							" " 
											
						}
					</div>

				)
			}
}

export default Menu;



