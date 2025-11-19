import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Config from './../../../config/Config';

const Login = () => {
  // const [input, setInput] = useState({})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // const handleInput = (e) => {
  //     setInput(prevState => ({...prevState, [e.target.name] : e.target.value}))
  // }

  // const handleLogin = () => {
  //     setLoading(true)
  //     axios.post('http://127.0.0.1:8000/api/login', input).then(res => {
  //         console.log(res.data)
  //         setLoading(false)
  //     })
  // }

  const handleLogin = () => {
    setIsLoading(true);
    setErrors({}); // Clear previous errors

    axios
      .post(`${Config.BASE_URL}/login`, { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.name);
        window.location.reload()
        toast('Login Successfully')
      })
      .catch((err) => {
        if (err.response?.status === 422) {
          // Validation errors
          setErrors(err.response.data.errors);
        } else {
          toast(err.response?.data?.message || "Invalid Credentials!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "380px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-3">Welcome Back</h3>
        <p className="text-center text-muted mb-4">Please login to continue</p>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">
              {errors.email[0]}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            required
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="invalid-feedback">
              {errors.password[0]}
            </div>
          )}
        </div>


        <button
          className={"btn btn-primary w-100 mt-2"}
          onClick={() => {
            handleLogin();
          }}
          disabled={isLoading}
          dangerouslySetInnerHTML={{
            __html: isLoading
              ? '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading'
              : "Login",
          }}
        ></button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
