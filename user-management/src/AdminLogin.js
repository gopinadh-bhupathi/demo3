import React , {useState} from 'react'
import { useHistory } from "react-router-dom";
function AdminLogin() {
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    let history = useHistory();

    async function loginUser() {
        let item = {email, password}
        console.warn(item)

        if (email==='admin@email.com' && password==='admin') {
            history.push("/admin")
        } else {
            alert("Login Failed")
        }
    } 

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Login Admin</h1>
            <br/>
            <input type = "text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br/>
            <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br/>
            <button onClick={loginUser} className="btn btn-primary">Login</button>
        </div>
    )
}

export default AdminLogin