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
        />
        <br />
        <Button secondary size="medium" onClick={sendData}>
          Enviar
        </Button>
      </div>
      <Modal size="small" open={open} onClose={() => setState(false)}>
        <Modal.Header>Delete Your Account</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your account</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative>No</Button>
          <Button positive>Yes</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Feedback;
