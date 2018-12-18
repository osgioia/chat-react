import React, { Component } from 'react';
import io from 'socket.io-client'
import './chat.css';

var socket = io('http://localhost:8000');

export default class Chat extends Component
{
    constructor(props){
        super(props)
        this.state = {value: '', messages: []};        ;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentWillMount(){
        socket.on('chat message', (msg) => {
            this.setState({messages: this.state.messages.concat(msg)})
          
        } )
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event)
    {
        event.preventDefault()
        socket.emit('chat message', this.state.value);
        this.setState({value : ''})
        
        /* socket.on('chat message', function(msg){
            $('#messages').append($('<li>').text(msg));
          }); */
    }

    render(){
        return( 
        <div className="Chat">
            <ul id="messages">
            {
                this.state.messages.map((i,k) => <li key ={k}>{i}</li>)
            }
            </ul>
            <form>
                <input value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Send</button>
                
            </form>
        </div>
        );
    }


}