import React, {Component} from 'react';

class Personajes extends Component{

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://my-json-server.typicode.com/david16260/datos_json/estudiantes', {method:'get'})
        .then(response => response.json())
        .then(data => {
            this.setState({
                posts: data
            })
        })
    }

    render(){
        const {posts} = this.state
        return (
            <>
                {
                    posts.map( d => (
                        <>
                        <div  className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{width: '18rem'}}>
                        <div className="card-body">
                        
                        <h5 class="card-title">{d.nombre}</h5>
                        <p className="card-text">{d.serie}</p>
                        <p className="card-text">{d.genero}</p>
                        <p className="card-text">{d.aficiones}</p>
                        <img src={d.foto} alt=""  style={{width: '210px'}}/>

                        <hr />
                        </div>
                        </div>
                        </>
                    ))
                }
            </>
        )
    }

}

export default Personajes;

