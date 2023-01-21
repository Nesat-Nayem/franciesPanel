import React from "react";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0d131d",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  mBottom: {
    marginBottom: ".5rem",
  },
  button: {
    marginTop: ".85rem",
  },
  loginCard: {
    width: "275px",
    borderRadius: 5,
    background: "#fff",
    padding: ".85rem",
  },
}));

const LoginPage = (props) => {
  const classNamees = useStyles();
  const { history } = props;

  return (
    <div className={classNamees.root}>
      <div className={classNamees.loginCard}>
        <Typography variant="h5" component="h1">
          Login
        </Typography>
        {/* <Typography className={classNamees.brand} variant="h5" component="h1">
          Login
        </Typography> */}
        <Typography className={classNamees.mBottom} variant="body1">
          Sign In to your account
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            size="small"
            label="Username"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <TextField
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
          />
          <Button
            onClick={() => history.push("/pages/auth/forgot-password")}
            color="primary"
          >
            Forgot password?
          </Button>
          <div className={classNamees.mBottom}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classNamees.button}
              onClick={() => history.push("/")}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className={classNamees.button}
              onClick={() => history.push("/pages/auth/register")}
            >
              Register Now!
            </Button>
          </div>
        </form>
        <Typography variant="caption">&copy; Trans 23 | React Admin</Typography>
      </div>
      {/* <Typography variant="h3" gutterBottom>
        Oops! <span className={classNamees.statusCode}>404</span>
      </Typography>
      <Typography variant="body1">
        The page you are looking for was not found.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classNamees.button}
        onClick={() => history.push("/")}
      >
        Back to Home
      </Button> */}
    </div>
  );
};

export default LoginPage;
