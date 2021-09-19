import { FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { InputAdornment, TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useInfoUser } from "../../provider/user";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Container, LogoImg } from "./styles";
import { useState } from "react";
import RPG from "../../assets/rpg.png";
import * as yup from "yup";

import LogoRed from "../../assets/logo-red.png";

const FormLogin = () => {
  const { login } = useInfoUser();
  const [inputType, setInputType] = useState("password");

  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleVisibility = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  return (
    <Container>
      <LogoImg src={LogoRed} alt="logo" />

      <div className="form">
        <img src={RPG} alt="" />
        <form onSubmit={handleSubmit(login)}>
          <h2>Welcome aboard, sailor! 🌊</h2>

          <TextField
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <FiUser />
                </InputAdornment>
              ),
            }}
            helperText={errors.username?.message}
            {...register("username")}
            label="Username"
            placeholder="username"
          />

          <TextField
            variant="outlined"
            type={inputType}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiLock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {inputType === "password" ? (
                    <FiEyeOff onClick={handleVisibility} />
                  ) : (
                    <FiEye onClick={handleVisibility} />
                  )}
                </InputAdornment>
              ),
            }}
            helperText={errors.password?.message}
            {...register("password")}
            placeholder="password"
            label="Password"
          />

          <input type="submit" className="button" value="Login" />

          <p>
            Don't have an account? <Link to="/">Sign Up</Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default FormLogin;
