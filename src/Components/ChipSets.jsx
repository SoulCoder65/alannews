import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import BookIcon from '@material-ui/icons/Book';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import PublicIcon from '@material-ui/icons/Public';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.8),
    },
  },
}));

const ChipSets=()=> {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
        <Chip
        icon={<TrendingUpIcon />}
        label="Trending"
        color="primary"
      />
      <Chip
        icon={<PublicIcon />}
        label="World"
        color="primary"
      />
      <Chip
        icon={<DesktopMacIcon />}
        label="Technology"
        color="primary"
      />
      <Chip
        icon={<WhatshotIcon />}
        label="Science"
        color="primary"
      />
      <Chip
        icon={<LocalHospitalIcon/>}
        label="Health"
        color="primary"
      />
      <Chip
        icon={<SupervisorAccountIcon />}
        label="Politics"
        color="primary"
      />
      <Chip
        icon={<BookIcon />}
        label="Education"
        color="primary"
        
      />
      <Chip
        icon={<MusicNoteIcon />}
        label="Entertainment"
        color="primary"
        
      />

      
    </div>
  );
}
export default ChipSets