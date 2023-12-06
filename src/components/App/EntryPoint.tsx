import { useAuthenticatedUser } from '../../hooks/useAuthenticatedUser';
import { Login } from '../Login/Login';
import { Layout } from './Layout';

export const EntryPoint = () => {
  const currentUser = useAuthenticatedUser();

  if (!currentUser) {
    return <Login />;
  } else {
    return <Layout />;
  }
};
