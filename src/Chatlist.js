import React, { Component } from 'react';

class Chatlist extends Component {
    handleClick(id, name) {
        console.log("click triggered " + id);
        this.props.sendData(id, name);
    }

    render() {
        const list = [{ 'id': 1, 'name': 'Alice' }, { 'id': 2, 'name': 'Bob' }, { 'id': 3, 'name': 'Cate' }];

        return (
            <div>
                <div className="chatsearch">
                    <form>
                        <input placeholder="Search or start new chat" type="text" />
                    </form>
                </div>
                <div className="chatList">
                    <ul>
                        {
                            list.map(item => {
                                if(item.name!==sessionStorage.getItem('user'))
                                return <li key={item.id} onClick={() => this.handleClick(item.id, item.name)}>
                                    <figure className="chatProf"></figure>
                                    <div className="chatdetail">
                                        <label className="chaterName">
                                            {item.name} <span>3:01pm</span>
                                        </label>
                                        <label className="chaterMessge">Ok dude <span className="chatalert">1</span></label>
                                    </div>
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
        );
    }
}

export default Chatlist;