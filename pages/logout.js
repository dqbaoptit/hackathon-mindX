import { localStorageConstant } from '../redux/constants';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { removeCookie } from '../utils/cookie';
function Logout() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push('/login'), 400);
  }, []);
  return <>{/*  */}</>;
}
Logout.getInitialProps = async (ctx) => {
  removeCookie(localStorageConstant.ACCESS_TOKEN);
  return {};
};
export default Logout;
