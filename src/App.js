import React,{useState} from 'react'
import './App.css';

const App = () => {
    const [data,setData] =useState({
        username:"",
        password:""
    })
    const {username,password} =data;
    const changehandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }
    return(
        <div>
            <center>
                <form onSubmit={submitHandler} >
                    <h1>login form</h1>
                    <label>username</label> <br /> <br />
                    <input type="text" name="username" value={username} onChange={changehandler} /> <br />
                    <label>password</label> <br/>
                    <input type="password  "name="password" value={password} onChange={changehandler}/> <br />
                    <button>submit</button>
                </form>
            </center>
        </div>
    )
}
export default App