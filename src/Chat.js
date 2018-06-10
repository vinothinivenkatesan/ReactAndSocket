import React, { Component } from 'react';
import io from "socket.io-client";

class Chat extends Component {

    render() {
        console.log("Data Passed " + this.props.messages);
        return (
            <div >
                <div className="chatheader">
                    <figure className="profuserImage"></figure>
                    <div className="userstatus">
                        <label>{this.props.userId}</label>
                        <span>Last seeen at  9:00 AM</span>
                    </div>
                    <ul className="pull-right sidebarOptions">
                        <li>
                            <button type="button" className="btnnostyle" data-toggle="dropdown">
                                <span><i className="fa fa-search"></i></span>
                            </button>
                        </li>
                        <li>

                            <button type="button" className="btnnostyle" id="NewChatClick">
                                <span><i className="fa fa-paperclip"></i></span>
                            </button>
                        </li>
                        <li>


                            <div className="dropdown">
                                <button type="button" className="btnnostyle" data-toggle="dropdown">
                                    <i className="fa fa-ellipsis-v"></i>
                                </button>

                                <div className="dropdown-menu">
                                    <a className="dropdown-item" id="newgroupclick">New group</a>
                                    <a className="dropdown-item" id="profile-click" href="#">Profile</a>
                                    <a className="dropdown-item" id="archivedclick" href="#">Archived</a>
                                    <a className="dropdown-item" id="staredclick">Stared</a>
                                    <a className="dropdown-item" id="settingclick">Setting</a>
                                    <a className="dropdown-item" id="logoutclick">Logout</a>

                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
                <div className="chatbody">
                    <div className="chateddate">
                        <span>{this.props.currentDate}</span>
                    </div>

                    <div className="messages">

                    </div>

                    <ul className="messagelist">
                        {this.props.messages.map(obj => {
                            if (obj.author === sessionStorage.getItem('user')) {
                                return (
                                    <li className="clienmesg">
                                        <div className="contxtHolder">
                                            <span className="contxt"> {obj.message} </span>
                                            <span className="mesreciveddate">2:30 AM</span>
                                            <div className="dropdown">
                                                <button className="btnnostyle" type="button" id="messageop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="messageop">
                                                    <a className="dropdown-item" href="#">Reply</a>
                                                    <a className="dropdown-item" href="#">Forward Message</a>
                                                    <a className="dropdown-item" href="#">Star Message</a>
                                                    <a className="dropdown-item" href="#">Delete</a>

                                                </div>
                                            </div>


                                        </div>
                                    </li>
                                )

                            } else {
                                return (
                                    <li className="usermesg">
                                        <div className="contxtHolder">
                                            <span className="contxt"> {obj.message} </span>
                                            <span className="mesreciveddate">2:30 AM</span>
                                            <div className="dropdown">
                                                <button className="btnnostyle" type="button" id="messageop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    <i className="fa fa-angle-down"></i>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="messageop">
                                                    <a className="dropdown-item" href="#">Reply</a>
                                                    <a className="dropdown-item" href="#">Forward Message</a>
                                                    <a className="dropdown-item" href="#">Star Message</a>
                                                    <a className="dropdown-item" href="#">Delete</a>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        })}

                    </ul>
                </div>
                <div className="chatfooter">
                    <span className="emoji">
                        <i className="fa fa-smile-o"></i>
                    </span>
                    <form className="inputtextfield">
                        <input type="text" placeholder="Type a message" name="message" value={this.props.inputMsg} onChange={ev => this.props.message(ev)} />
                    </form>
                    <span className="mic">
                        <i className="fa fa-chevron-circle-right" onClick={e => this.props.sendMessage(e, this.props.inputMsg)}></i>
                    </span>
                </div>
            </div>
        );
    }
}
export default Chat;