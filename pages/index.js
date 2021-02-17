import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Feedback from "./component/feedback";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>v-project-app</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a className={styles.a}>v-project-app</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <section className={styles.sectionImage}>
          <img src="/v-project-app.svg" />
        </section>
        <section className={styles.sectionInfo}>
          <div className={styles.principalText}>
            <p>
              <b>
                App movil que permite saber que lugares tienes cerca a tu
                ubicacion
              </b>
              <br />
            </p>
          </div>
        </section>
        <section className={styles.objectives}>
          <div>
            <div className={styles.title}>
              <p>
                A traves de este sitio, pretendo validar una idea de negocio,
                <br />
                que consiste en una aplicacion movil que te permite preguntar
                <br />
                por algun producto o servicio que necesites y la app te muestre
                <br />
                en lugar lo puedes conseguir y que ademas este cerca de tu
                <br />
                ubicación.
              </p>
            </div>
            <ul className={styles.ulObjectives}>
              <li>
                Ofrecer a los usuarios, variedad de lugares en los que quiera,
                <br />
                hacer una compra de algun producto, servicio, tomar una cena o
                <br />
                salir con sus amigos.
              </li>
              <li>
                mostrar los diferentes productos y servicios que ofrecen los
                <br />
                establecimentos al rededor de donde se en cuentran los usuarios
                <br />
                de la app.
              </li>
              <li>
                dar una alternativa de dar visibilidad de los productos o
                servicios
                <br />
                que ofrecen los pequeños y medianos negocios.
              </li>
            </ul>
          </div>
          <div className={styles.public}>
            <p className={styles.subtitle}>Publico objetivo</p> <br />
            <p>
              Estamos enfocados en 2 tipo de publico que posteriormente seran 2
              <br />
              tipos de usuarios de la aplicacion
              <br />
              1) personas entre los 14 - 65 años que quieran realizar busquedas
              de <br />
              productos, servicios cerca de su ubicación.
              <br />
              2) personas dueñas de negocios como restaurantes,
              <br />
              peluquerias, puestos de comidas, panaderias, tiendas, almacenes de
              <br />
              prendas de vestir, farmacias, etc..
            </p>
          </div>
          <Feedback />
        </section>
      </main>
      <Footer />
    </div>
  );
}
