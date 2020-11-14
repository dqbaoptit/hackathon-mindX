import '../styles/globals.scss';
import '../styles/styles.scss';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { Layout } from '../components';
import { getCookie } from '../utils/cookie';
import { isAuthenticated } from '../utils/middleware';
import { localStorageConstant } from '../redux/constants';
function MyApp({ Component, pageProps, user }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      {user ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const token = await getCookie(localStorageConstant.ACCESS_TOKEN, ctx);
  if (token) {
    const data = await isAuthenticated(ctx, token);
    return {
      user: data,
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};
export default MyApp;
