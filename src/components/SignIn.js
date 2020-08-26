import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { auth } from "../firebase";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)

      .catch((error) => alert(error.message));
    setOpenSignIn(false);
    console.log(email, password);
  };

  return (
    <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
      <div style={modalStyle} className={classes.paper}>
        <form className="app__signin">
          <center>
            <img
              className="app__headerImage"
              src="https://i.pinimg.com/originals/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.gif"
              alt=""
            />
          </center>

          <Input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={signIn}>
            Sign In
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default SignIn;
