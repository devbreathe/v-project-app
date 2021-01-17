import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import "semantic-ui-css/semantic.min.css";
import { Input, TextArea, Button } from "semantic-ui-react";

export default function Home() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
      </style>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a>v-project-app</a>
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
            </p>
          </div>
          <br />
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
            <p>Publico objetivo</p> <br />
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
          <div className={styles.feedback}>
            <p>¿Usarias esta aplicación?</p>
            <div className={styles.likes}>
              <img className={styles.imgs} src="/like.svg" />

              <img className={styles.imgs} src="/no-like.svg" />
            </div>
            <p>
              ¿Podrias darme un feedback, de que no te gusto o que quisieras
              cambiar ?
            </p>
            <div className={styles.contact}>
              <Input
                className={styles.input}
                placeholder="email"
                size="small"
              />
              <br />
              <TextArea className={styles.input} placeholder="Feedback" />
              <br />
              <Button secondary size="medium">
                Enviar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
