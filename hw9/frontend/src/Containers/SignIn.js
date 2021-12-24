import React, { useState } from "react";
import { Input } from "antd";
import "../App.css"

export default ({ setUserName, displayStatus, setMe, setLogin }) => {
    return(
    <>
    <div className='App'>
        <div className="App-title">
          <h1>Log In to Chat Room</h1>         
        </div>
        <div style={{height: "50px"}}></div>
        <Input.Search
          enterButton="Sign In"
          placeholder="Enter username"
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          onSearch={(msg) => {
            if(!msg){
              displayStatus({
                type: 'error',
                msg: 'Please enter a username'
              })
              return;
            }
            setMe(msg)
            setLogin(true)
          }}
        ></Input.Search>
      </div>
    </>
    )
}