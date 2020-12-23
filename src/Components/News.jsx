import React from "react"
import NewsCard from "./NewsCard"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:"5%",
    },
    
  }));
const News=()=>{
    const classes = useStyles();

    const data_array=[
        {
            "title":"Latest News",
            "subtitle":"Popular News",
            "values":"India,World,Science, Arts",
            "command":"Show me the latest news",
        },
        {
            "title":"Read By Categories",
            "subtitle":"Options",
            "values":"Technology,Business,Sports,Science",
            "command":"Show the Technology news ",
        },
        {
            "title":"Read By Tags",
            "subtitle":"Tags",
            "values":"Covid,Economy,India,cricket",
            "command":"News about Covid",
        },
        {
            "title":"News by Sources",
            "subtitle":"Sources",
            "values":"BBC,Time ABC News...",
            "command":"Show news from Time",
        },
        
    ]
    
    return<>
    <div className={classes.root}>
    <Grid container spacing={3}>
    {
        data_array.map((data,index)=>{
            return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <NewsCard data={data}/>
                </Grid>
            )
        })
    }
        </Grid>
        </div>
    </>
}
export default News;