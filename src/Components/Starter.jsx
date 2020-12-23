import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ChipSets from "./ChipSets"
const useStyles = makeStyles({
  centerDiv: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: 700,
    height: 190,
    marginTop: "2%",
    backgroundColor:"transparent",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  readHead:{
    textAlign:"center",
    marginBottom:"1%",
    fontWeight:"bold",
    color:"#fd3a69"

  }
});

const Starter = () => {
  const classes = useStyles();

  return (
    <div className={classes.centerDiv}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.readHead}>
            Read Articles On 
          </Typography>
          <ChipSets/>
        </CardContent>
        
      </Card>
    </div>
  );
};
export default Starter;
