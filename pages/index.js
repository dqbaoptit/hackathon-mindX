import Head from 'next/head';
import '../styles/Home.module.scss';
import { FieldCard } from '../components';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
 
      <div className="container__field">
        {[1, 2, 3, 4, 5].map((item) => (
           <FieldCard />
        ))}
      </div>

      </main>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}
