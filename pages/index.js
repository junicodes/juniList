import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { useAppContext } from '../react-wrappers/AppContext';
import Link from 'next/link';

export default function Home() {
  const sharedState = useAppContext();
  console.log(sharedState);
  
  const changeToken = (e) => {

    sharedState.token = 'yellow boy';
    sharedState.userPayload = {
        name: "Okechukwu Obi",
        email: "junicodesdev@gmail.com",
        age: "27"
    }
    console.log(sharedState)

  }
  return (
    <>
      <Head>
        <title>QuickFix | Home</title>
        <meta name="keywords" content="Ninja lIst" />
      </Head>
      <div>
          <h1 className={styles.title}>
            HomePage
          </h1>
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into elec
          </p>
          <Link href="/solutions">
            <a className={styles.btn}>See Solutions</a>
          </Link>
          <div onClick={changeToken}>
            <a className={styles.btn}>Change Token</a>
          </div>
      </div>
    </>
  )
}
