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
    </div>
  );
}
