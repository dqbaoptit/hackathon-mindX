import '../styles/globals.scss';
import '../styles/styles.scss';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
