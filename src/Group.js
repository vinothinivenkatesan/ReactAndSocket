
import React, { Component } from 'react';

class Group extends Component {
    render() {
        return (
            <div id="newgroup" className="sidetray sidebar-newgroup">
                <header>
                    <div className="titles">
                        <i id="" className="profileExit fa fa-arrow-left"></i>
                        <span>Add Group Participant</span>
                    </div>
                </header>
                <div className="usernewgroupsection">

                    <div className="chatList">
                        <form>
                            <input placeholder="Type Contact Name" className="searchName" type="text" />
                        </form>
                        <div className="alpaOrder">
                            <span className="alphavalue">#</span>
                            <ul>
                                <li>
                                    <figure className="chatProf"></figure>
                                    <div className="chatdetail">
                                        <label className="chaterName">Sugan <span>3:01pm</span></label>
                                        <label className="chaterMessge">Ok dude <span className="chatalert">1</span></label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="alpaOrder">
                            <span className="alphavalue">A</span>
                            <ul>
                                <li>
                                    <figure className="chatProf"></figure>
                                    <div className="chatdetail">
                                        <label className="chaterName">Sugan <span>3:01pm</span></label>
                                        <label className="chaterMessge">Ok dude <span className="chatalert">1</span></label>
                                    </div>
                                </li>

                                <li>
                                    <figure className="chatProf"></figure>
                                    <div className="chatdetail">
                                        <label className="chaterName">Sugan <span>3:01pm</span></label>
                                        <label className="chaterMessge">Ok dude <span className="chatalert">1</span></label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Group;