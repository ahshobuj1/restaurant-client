import {useContext} from 'react';
import {AuthContext} from '../contextApi/UserContext';

const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

export default useAuth;
