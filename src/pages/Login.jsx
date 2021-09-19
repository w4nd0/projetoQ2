import { useHistory } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import { useInfoUser } from "../provider/user";

const Login = () => {
  const { infoUser } = useInfoUser();

  const history = useHistory();

  if (infoUser.authenticated) {
    history.push("/dashboard");
  }
  return (
    <div>
      <FormLogin />
    </div>
  );
};

export default Login;
