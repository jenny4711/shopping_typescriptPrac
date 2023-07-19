import React, { ChangeEvent, FormEvent, useState } from "react";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";
import { log } from "../model/types";
interface OwnProps {
  setLog: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<OwnProps> = ({ setLog }) => {
  const navigate = useNavigate();
  const [logObj, setLogObj] = useState<log>({ username: "", password: "" });
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setLogObj({ ...logObj, [evt.target.name]: evt.target.value });
  };
  const userLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (logObj.username === "jenny4711" && logObj.password === "2474") {
      setLog(true);
      navigate("/");
    } else {
      setLog(false);
    }
  };
  return (
    <div className="Login">
      <form onSubmit={(e) => userLogin(e)} className="LoginForm">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
