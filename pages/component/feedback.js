import React, { useState } from "react";

import "semantic-ui-css/semantic.min.css";
import { Input, TextArea, Button, Icon, Modal } from "semantic-ui-react";

import styles from "../../styles/Feedback.module.css";

import post from "../http/http";

const Feedback = () => {
  const [data, setData] = useState({ email: "", feedback: "" });
  const [count, setCount] = useState({
    like: 0,
    nolike: 0,
    color: "black",
  });
  const [open, setState] = useState(false);
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUp = (e) => {
    setCount({ ...count, like: count.like + 1, color: "green" });
  };

  const handleDown = () => {
    setCount({ ...count, nolike: count.nolike + 1, color: "green" });
  };

  const sendData = () => {
    console.log(data);
    post(data)
      .then((res) => {
        setState(true);
        setData({ email: "", feedback: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.flexContainer}>
      <p>¿Usarias esta aplicación?</p>
      <div className={styles.likes}>
        <Icon
          name="thumbs up"
          size="large"
          link
          onClick={handleUp}
          color={count.color}
        />

        <Icon
          name="thumbs down"
          size="large"
          link
          onClick={handleDown}
          color={count.color}
        />
      </div>
      <p>
        ¿Podrias darme un feedback, de que no te gusto o que quisieras cambiar ?
      </p>
      <div className={styles.contact}>
        <div className={styles.container_image}>
          <img className={styles.img} src="/peopleworking.svg" />
        </div>
        <div className={styles.container_group}>
          <Input
            className={styles.input}
            name="email"
            placeholder="email"
            size="small"
            value={data.email}
            onChange={handleOnChange}
          />
          <br />
          <TextArea
            className={styles.input}
            name="feedback"
            placeholder="Feedback"
            value={data.feedback}
            onChange={handleOnChange}
            rows={4}
          />
          <br />
          <Button fluid secondary onClick={sendData}>
            Enviar
          </Button>
        </div>
      </div>
      <Modal size="small" open={open} onClose={() => setState(false)}>
        <Modal.Header>v-project-app</Modal.Header>
        <Modal.Content>
          <p>
            Muchas gracias por tu feedback te estaremos dando mas informacion
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => setState(false)}>
            Gracias
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Feedback;
