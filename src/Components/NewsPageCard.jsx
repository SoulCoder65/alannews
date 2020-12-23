import React,{useState,useEffect,createRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DefaultImg from "./../Images/imagenot.png"
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CopyrightIcon from '@material-ui/icons/Copyright';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import classNames from "classnames";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  highlight:{
    border:"5px solid blue"
  }
}));

const NewsPageCard=({data,counter,checkhighlight})=> {
  const[elRefs,setRefs]=useState([]);
  const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop-50)
  useEffect(()=>{
    setRefs((refs)=>Array(20).fill().map((_,j)=>refs[j] || createRef()));
  },[]);
  useEffect(()=>{
    if(counter===checkhighlight && elRefs[checkhighlight])
    {
      scrollToRef(elRefs[checkhighlight])
    }
  },[counter,checkhighlight,elRefs]);
  
const{title,source,url,urlToImage,publishedAt,author,description}=data

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card ref={elRefs[counter]} className={classNames(classes.root,checkhighlight===counter?classes.highlight:null)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {author?author[0]:"N"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"  href={url} target="_blank">
            <VisibilityIcon style={{color:"blue"}} />
          </IconButton>
          
        }
        title={author?author:"Unknown"}
        subheader={publishedAt.slice(0,10)}
      />
      <CardMedia
        className={classes.media}
        image={urlToImage?urlToImage:DefaultImg}
        title={author}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CopyrightIcon />
          <Typography varient="span">
          {source.name}
          
          </Typography>
          <Chip label={counter+1} style={{marginLeft:"3%"}}/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default NewsPageCard;