import React , {useState} from 'react'
import { useHistory } from "react-router-dom";

function Register() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email_id,setEmail]=useState("")
    const [age, setAge]=useState("")
    let history = useHistory();

    async function signUp() {
        let item = {name, email_id, password, age}
        console.warn(item)

       let result = await fetch("http://localhost:9090/users/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push('/login')
    } 

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register User</h1>
            <input type = "text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
            <br/>
            <input type = "number" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" placeholder="Age"/>
            <br/>
            <input type = "email" value={email_id} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br/>
            <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
    )
}

export default Register