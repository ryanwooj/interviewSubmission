import React from 'react'

export default function MenuView() {
  return (
     <div className="ui attacked stackable menu">
          <div className="ui container">
            <a className="item" href="/">
              <i className="home icon"></i> Home
            </a>
            <a className="item" href="/">
              <i className="grid layout icon"></i> Browse
            </a>
            <a className="item" href="/">
              <i className="mail icon"></i> Messages
            </a>
            <div className="ui simple dropdown item">
              <i className="dropdown icon folder"></i>
              <a className="item" href="/"><i className="edit icon"></i>Edit Profile</a>
              <a className="item" href="/"><i className="globe icon"></i>choose langeuage</a>
              <a className="item" href="/"><i className=" settings"></i>Account Setting</a>
            </div>
            <div className="right item">
              <div className="ui input">
                <input type="text" placeholder="Search..."/>
              </div>
            </div>
          </div>
        </div>
  )
}
