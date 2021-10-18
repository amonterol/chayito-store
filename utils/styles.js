import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  infobar: {
    backgroundColor: "#203040",
    color: "#ffffff",
    minHeight: "5vh",
    maxHeight: "5vh",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
      marginButton: 5,
    },
  },
  infoEmail: {
    fontSize: "0.8rem",
  },
  navbar: {
    backgroundColor: "#ffffff",
    color: "#212529",
    "& a": {
      color: "#212529",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "2rem",
  },

  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: "#212529",
    minHeight: "25vh",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 50,
    paddingTop: 50,
  },
  footerInfo: {
    padding: 50,
  },
});
export default useStyles;
