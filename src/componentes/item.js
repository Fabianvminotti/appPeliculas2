import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'




class Item extends React.Component{

    constructor(props){
        super(props);

        this.state={
            estrellas:[]
        }
    }

    componentDidMount(){
        this.setState({
        estrellas: Array(parseInt(this.props.rating)).fill(0)
    })
    }      

    borrar=()=>{
        console.log(this.props.id);
        this.props.borrar(this.props.id);
    }

    render(){
        return(
                <div className="item"> 
                    <div className="estrellas">
                        {
                            this.state.estrellas.map(t =>
                                <span>★</span>
                                )
                        }
                    </div>
                    <h2>{this.props.titulo}</h2>
                    <img src={this.props.imagen}/>
                    <p>{this.props.descripcion}</p>
                    <div>{this.props.genero}</div>
                    <button onClick={this.borrar} ><FontAwesomeIcon icon={faTrash}/>  </button>
                </div>

            )
    }
}

export default Item;