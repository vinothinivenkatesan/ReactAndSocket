import React, { Component } from 'react';
import io from "socket.io-client";
import logo from './logo.svg';
import './App.css';
import Chatlist from './Chatlist';
import Profile from './Profile';
import Group from './Group';
import Starred from './Starred';
import Newchat from './Newchat';
import Archive from './Archive';
import Sidebar from './Sidebar';
import Home from './Home';
import Chat from './Chat';
import Login from './Login';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { loggedUser: sessionStorage.getItem('user'), currentDate: '', isChat: false, user: '', message: '', messages: [] };

    this.socket = io('localhost:8080');

    this.socket.on('RECEIVE_MESSAGE', function (data) {
      addMessage(data);
    });


    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };
  }

  componentWillMount() {
    const date = new Date().toJSON().slice(0, 10);
    this.setState({ currentDate: date });
  }

  getData(id, name) {
    this.setState({ isChat: true, user: name, message: '', messages: [] });
  }

  getUser(loggedUser) {
    this.setState({ loggedUser: loggedUser });
  }

  sendMessage = (e, message) => {
    if (message !== '') {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.loggedUser,
        message: message
      });
      this.setState({ message: '' });
    }
  };

  message = (event) => {
    console.log(event);
    this.setState({ message: event.target.value });
  }

  sessionUser = sessionStorage.getItem('user');
  render() {

    console.log("sessionnnnnnnnnnnn" + sessionStorage.getItem('user'));
    console.log("Logged User" + this.state.loggedUser);

    if (this.state.loggedUser == '' || this.state.loggedUser == null) {
      return (
        <Login sendUser={this.getUser.bind(this)} />
      );
    } else {

      return (

        <div className="web-container">

          <Newchat />

          <Starred />

          <Archive />

          <Group />

          <Profile />

          <div className="appSidebar">

            <Sidebar />

            <Chatlist sendData={this.getData.bind(this)} />

          </div>

          <div className="appContent" >

            {this.state.isChat && <Chat currentDate={this.state.currentDate} loggedUser={this.state.loggedUser} userId={this.state.user} messages={this.state.messages} inputMsg={this.state.message} sendMessage={this.sendMessage.bind(this)} message={this.message.bind(this)} />}

            {!this.state.isChat && <Home />}

          </div>

        </div>

      );
    }
  }
}

export default App;
