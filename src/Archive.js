import React, { Component } from 'react';

class Archive extends Component {
  render() {
    return (
      <div id="archived" className="sidetray sidebar-archived">
        <header>
          <div className="titles">
            <i id="" className="profileExit fa fa-arrow-left"></i>
            <span>Archived</span>
          </div>
        </header>
        <div className="usernewgroupsection">
          <div className="chatList">
            <ul>
              <li>
                <figure className="chatProf"></figure>
                <div className="chatdetail">
                  <label className="chaterName">Sugan <span>3:01pm</span></label>
                  <label className="chaterMessge">Ok dude <span className="archivedlabel">Archived</span></label>
                </div>
              </li>
              <li>
                <figure className="chatProf"></figure>
                <div className="chatdetail">
                  <label className="chaterName">Sugan <span>3:01pm</span></label>
                  <label className="chaterMessge">Ok dude <span className="archivedlabel">Archived</span></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Archive;