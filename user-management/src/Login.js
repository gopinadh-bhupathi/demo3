import React , {useState} from 'react'
function Login() {
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

    async function loginUser() {
        let item = {email, password}
        console.warn(item)

       let result = await fetch("http://localhost:9090/users/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        console.warn("result", result)
    } 

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Login User</h1>
            <br/>
            <input type = "text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br/>
            <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br/>
            <button onClick={loginUser} className="btn btn-primary">Login</button>
        </div>
    )
}

export default Login