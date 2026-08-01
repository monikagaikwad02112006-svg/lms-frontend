import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherLogin.css";

function TeacherLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login
    if(email && password){
      navigate("/teacher/dashboard");
    }
  };


  return (

    <div className="teacher-login-page">


      <div className="teacher-login-card">


        <h1>
        Teacher Login
        </h1>




        <p>
          Login to manage your courses and students
        </p>



        <form onSubmit={handleLogin}>


          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter teacher email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

          </div>



          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

          </div>



          <button type="submit">
            Login
          </button>


        </form>


      </div>


    </div>

  );
}


export default TeacherLogin;