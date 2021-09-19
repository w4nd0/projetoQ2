import { FiMail, FiLock, FiUser, FiEye, FiEyeOff } from "react-icons/fi";
import { InputAdornment, TextField } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useInfoUser } from "../../provider/user";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RPG from "../../assets/rpg.png";
import Dragon from "../../assets/dragon.png";
import { Container } from "./styles";
import * as yup from "yup";
import { useInfoGuild } from "../../provider/guild";

const FormSing = () => {
  const [inputType, setInputType] = useState("password");
  const [user, setUser] = useState([]);
  const { createAccount } = useInfoUser();
  const { searchGuilds } = useInfoGuild();

  const schema = yup.object().shape({
    username: yup.string().required("Required field."),
    email: yup.string().email("Invalid email.").required("Required field"),
    password: yup
      .string()
      .min(6, "Password must contain at least 6 characters.")
      .required("Required field"),
    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleVisibility = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  useEffect(() => {
    if (user.username) {
      createAccount(user);
    }
    // eslint-disable-next-line
  }, [user]);

  const onSubmit = (data) => {
    setUser({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    searchGuilds("leveling");
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="left-container">
        <img src={Dragon} alt="" />
        <div className="description">
          <h2>
            Join this journey and discover a universe of possibilities to
            overcome your greatest challenges!
          </h2>
        </div>
      </div>

      <div className="right-container">
        <div className="form-container">
          <div className="header">
            <img src={RPG} alt="shield" />
            <h1>Create Account</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="username"
              label="Username"
            />

            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <FiMail />
                  </InputAdornment>
                ),
              }}
              helperText={errors.email?.message}
              {...register("email")}
              placeholder="email"
              label="E-mail"
            />

            <div className="password">
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
                helperText={errors.confirmPassword?.message}
                {...register("confirmPassword")}
                placeholder="password"
                label="Confirm Password"
              />
            </div>

            <input type="submit" className="button" value="Register" />

            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default FormSing;
