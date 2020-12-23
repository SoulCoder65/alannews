import React from "react"
import NewsPageCard from "./NewsPageCard"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:"5%",
      
    },
    
  }));
const Newspage=({dataList,highlightcheck})=>{
    
    const classes = useStyles();

    console.log(dataList.length);
    return<>
   
    <div className={classes.root}>
    <Grid container spacing={3}>
    {
        dataList.length!=0?
        dataList.map((dt,index)=>{
            return (
                <Grid item xs={12} sm={6}  lg={4}>
            <NewsPageCard key={index} data={dt} counter={index} checkhighlight={highlightcheck}/>
            </Grid>
            )
        })
    
    :<h1>loding......</h1>}

    </Grid>
    
    </div>
    </>
}
export default Newspage;