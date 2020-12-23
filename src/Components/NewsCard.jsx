import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import "./../index.css";

const useStyles = makeStyles({
  root: {
    minWidth: 290,
    height: 290,
    textAlign: "center",
    backgroundImage: "url('../Images/cardbg.jpg')",
    opacity: "0.7 ",
    fontWeight: "bold",
    color: "black",
    fontWeight: "bolder",
    borderLeft: "3px dotted blue",
    borderRight: "3px dotted blue",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "grey",
  },
  pos: {
    marginBottom: 12,
  },
  subtitle: {
    marginTop: "10%",
    marginBottom: "10%",
    color: "#fd3a69",
    fontWeight: "bold",
  },
  tryby: {
    marginTop: "10%",
    marginBottom: "10%",
  },
});

const NewsCard = ({ data }) => {
  const { command, values, title, subtitle } = data;
  const classes = useStyles();

  return (
    <Card className={classes.root} id="fontStyle" variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.subtitle}>
            {subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {values}
            <br />
          </Typography>
          <Typography variant="body2" component="p" className={classes.tryby}>
            Try by Saying...
            <br />
          </Typography>
          <Typography style={{ fontStyle: "italic" }}>"{command}"</Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </CardActionArea>
    </Card>
  );
};
export default NewsCard;
