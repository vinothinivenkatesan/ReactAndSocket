import React, { Component } from 'react';

class Newchat extends Component {
    render() {
        return (
            <div id="NewChat" className="sidetray sidebar-NewChat">
                <header>
                    <div className="titles">
                        <i id="" className="profileExit fa fa-arrow-left"></i>
                        <span>New Chat</span>
                    </div>
                </header>
                <div className="usernewgroupsection">

                    <div className="chatList hide">
                        <div className="chatsearch">
                            <form>
                                <input placeholder="Search or start new chat" type="text" />
                            </form>
                        </div>
                        <ul>
                            <li>
                                <figure className="chatProf"></figure>
                                <div className="chatdetail">
                                    <label className="chaterName">Sugan </label>
                                    <label className="chaterMessge">Ok dude </label>
                                </div>
                            </li>
                            <li>
                                <figure className="chatProf"></figure>
                                <div className="chatdetail">
                                    <label className="chaterName">Sugan </label>
                                    <label className="chaterMessge">Ok dude </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="usernewgroupsection">

                    <div className="chatList">
                        <div className="chatsearch">
                            <form>
                                <input placeholder="Search or start new chat" type="text" />
                            </form>
                        </div>
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

export default Newchat;