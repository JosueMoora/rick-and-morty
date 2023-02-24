import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";
const Form = ({ login }) => {
  const [userData, SetUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const handleInputChange = (event) => {
    SetUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div className={style.loginbox}>
      <form onSubmit={handleSubmit}>
        <div className={style.userbox}>
          <input
            value={userData.username}
            name="username"
            type="text"
            onChange={handleInputChange}
          />
          <label>Username</label>
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>
        <div className={style.userbox}>
          <input
            value={userData.password}
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <label>Password</label>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <center>
          <button className={`${style.learnmore}`}>
            <span class={style.circle} aria-hidden="true">
              <span className={`${style.icon} ${style.arrow}`} ></span>
            </span>
            <span className={style.buttontext}>LOGIN</span>
          </button>
        </center>
      </form>
    </div>
  );
};

export default Form;
