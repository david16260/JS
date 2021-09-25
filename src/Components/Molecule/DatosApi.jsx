import React, {Component} from 'react';

class DatosApi extends Component{

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts', {method:'get'})
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
                        <p>{d.id}</p>
                        <p>{d.title}</p>
                        <p>{d.body}</p>
                        <hr />
                        </>
                    ))
                }
            </>
        )
    }

}

export default DatosApi;

