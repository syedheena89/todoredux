import loginDetails from "../data/LoginDetails.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({updateState}) => {
  //let location = useLocation();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginDetails.email === email && loginDetails.password === password) {
     navigate("/TodoList", true);
    
    } else {
      navigate("/InvalidAccess", true);
    }
  };
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  }
  const clickToSignup = (e) => {
    e.preventDefault();
    navigate("/Signup", true);
  };
  return (
    <div>
    
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login</h3>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            className="login-form input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" id="password-label">
            {" "}
            Password :{" "}
          </label>
          <input
            className="login-form input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="button-class">
          <button type="submit">Login</button>
          <button onClick={clickToSignup}>SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

