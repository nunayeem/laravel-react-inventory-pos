import axios from "axios";
import { useState } from "react";


const Login = () => {

    const [input, setInput] = useState({})
    const [loading, setLoading] = useState(false)

    const handleInput = (e) => {
        setInput(prevState => ({...prevState, [e.target.name] : e.target.value}))
    }

    const handleLogin = () => {
        setLoading(true)
        axios.post('http://127.0.0.1:8000/api/login', input).then(res => {
            console.log(res.data)
            setLoading(false)
        })
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "380px", borderRadius: "15px" }}>
        <h3 className="text-center mb-3">Welcome Back</h3>
        <p className="text-center text-muted mb-4">Please login to continue</p>


          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type={'email'}
              name={'email'}
              value={input.email}
              className={'form-control'}
              placeholder="Enter your email"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={input.password}
              onChange={handleInput}
            />
          </div>

          <button className={'btn btn-primary w-100 mt-2'} onClick={() => {handleLogin()}} dangerouslySetInnerHTML={{ __html: loading ? '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading' : 'Login' }}></button>
      </div>
    </div>
  );
};

export default Login;
