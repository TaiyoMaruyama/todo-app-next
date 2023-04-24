import SignUpPage from "./signUp";
import { useAuth } from "./states/useAuth";

const SoignInState = () => {
  const user = useAuth();
  return <>{!user ? <div>kokok</div> : <SignUpPage />}</>;
};

export default SoignInState;
