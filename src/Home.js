import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="contentholder">
                <div className="applogo">
                    <img src="https://web.whatsapp.com/img/c98cc75f2aa905314d74375a975d2cf2.jpg" />
                </div>
                <div className="appaddcontent">
                    <h1>Keep your phone connected</h1>
                    <p>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>
                </div>
            </div>
        );
    }
}

export default Home;