import React, { Component } from 'react';

class Sidebar extends Component {

    toggleActive() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div className="sidebarheader">
                <figure id="profile" className="userImg"></figure>
                <span className="user">{sessionStorage.getItem('user')}</span>
                <span className="status">Online</span>
                <ul className="pull-right sidebarOptions">
                    <li>
                        <button type="button" className="btnnostyle" data-toggle="dropdown">
                            <span><i className="fa fa-circle-o-notch" aria-hidden="true"></i></span>
                        </button>
                    </li>
                    <li>

                        <button type="button" className="btnnostyle" id="NewChatClick">
                            <span><i className="fa fa-commenting"></i></span>
                        </button>
                    </li>
                    <li>


                        <div className="dropdown">
                            <button type="button" className="btnnostyle" data-toggle="dropdown">
                                <i className="fa fa-ellipsis-v"></i>
                            </button>

                            <div className="dropdown-menu">
                                <a className="dropdown-item" id="newgroupclick">New group</a>
                                <a className="dropdown-item" onClick={this.toggleActive} id="profile-click" href="#">Profile</a>
                                <a className="dropdown-item" id="archivedclick" href="#">Archived</a>
                                <a className="dropdown-item" id="staredclick">Stared</a>
                                <a className="dropdown-item" id="settingclick">Setting</a>
                                <a className="dropdown-item" id="logoutclick">Logout</a>

                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        );
    }
}
export default Sidebar;
