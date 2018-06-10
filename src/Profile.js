import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div id="profiletray" className="sidetray sidebar-profile hide">
                <header>
                    <div className="titles">
                        <i className="fa fa-arrow-left profileExit"></i>
                        <span>Profile</span>
                    </div>
                </header>
                <div className="userprofilesection">
                    <figure className="userprofimg">
                    </figure>
                    <div className="namesection">
                        <label>Your Name</label>
                        <span>Sugan <i className="fa fa-pencil"></i></span>
                    </div>

                    <span className="nametext">
                        This is not your username or pin. This name will be visible to your WhatsApp contacts.
                </span>
                    <div className="namesection">
                        <label>About</label>
                        <span>... <i className="fa fa-pencil"></i></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;