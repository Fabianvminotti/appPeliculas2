
import React from 'react'
import Buscar from "./Buscar"
import PanelAgregar from "./PanelAgregar"


class Menu extends React.Component{
		
		constructor(props){
			super(props)

			this.state={panelAgregar:false}

			/*this.add = this.add.bind(this);*/
		}
	
	
		add = (e) => {
			e.preventDefault();
			this.setState({panelAgregar:true})
		}

		cancelar = (e)=>{
			e.preventDefault();
			this.setState({panelAgregar:false})
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
							<PanelAgregar cancelar={this.cancelar}/> //(mandar a llamar al prop)aca tengo que definir "cancelar" que se trae desde el elemento PanelAgregar
							:
							" " 
											
						}
					</div>

				)
			}
}

export default Menu;



