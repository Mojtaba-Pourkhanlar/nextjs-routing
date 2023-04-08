import { makeStyles } from "@mui/styles";

//     [theme.breakpoints.down("xs")]:
//     [theme.breakpoints.between("sm", "md")]: 
//     [theme.breakpoints.up("xs")]:
//   "@media (min-width: 1200px)":

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    backgroundColor: "#2b2b2b",
    padding: "2rem",
    maxWidth: "50rem",
    width: "80%",
    margin: "-3rem auto",
    color: "#d5eeeb",
    display: "flex",
    justifyContent: " space-between",
    gap: "1rem",
    flexDirection: " column",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      backgroundColor: "purple"
    },
  },
  image: {
    width: "10rem",
    height: "10rem",
    borderRadius: " 50%",
    overflow: "hidden",
    border: "5px solid white",
  },
}));

export default useStyles;
