import { useHistory } from "react-router-dom";
import FormSign from "../components/FormSign";
import { useInfoUser } from "../provider/user";

const Signup = () => {
  const { infoUser } = useInfoUser();

  const history = useHistory();

  if (infoUser.authenticated) {
    history.push("/dashboard");
  }

  return (
    <div>
      <FormSign />
    </div>
  );
};

export default Signup;
