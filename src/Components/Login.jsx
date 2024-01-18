import React from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {setUser} = React.useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login here</h2>
            <input 
                type="text" 
                placeholder='Username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login