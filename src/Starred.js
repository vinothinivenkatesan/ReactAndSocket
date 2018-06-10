
import React, { Component } from 'react';

class Starred extends Component {
    render() {
        return (
            <div id="stared" className="sidetray sidebar-stared">
                <header>
                    <div className="titles">
                        <i id="" className="profileExit fa fa-arrow-left"></i>
                        <span>stared Messages</span>
                    </div>
                </header>
                <div className="usernewgroupsection">
                    <ul className="staredList">

                        <li>
                            <figure className="chatProf"></figure>
                            <div className="rightchatdetail">
                                <div className="chatdetail">
                                    <label className="senderName">Aarth <i className="fa fa-angle-right"></i> <span className="towhom">you</span><label className="chatdate">12/2/2018</label></label>
                                </div>
                                <div className="contentdetail ">
                                    <span className="mesagecontent"> message go here</span>
                                    <div className="dropdown">
                                        <button className="btnnostyle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-angle-down"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                    <div className="chattimestamp">
                                        <span><i className="fa fa-star"></i> 5:04PM</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Starred;