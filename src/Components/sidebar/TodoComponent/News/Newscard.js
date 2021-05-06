import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin:"2vw", 
    backgroundColor:"#032d57",
    color:"red",
    height:500
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({Newss}) {
  const classes = useStyles();

  return (
      <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" , alignItems:"center"}}>

    {Newss.map((value)=>{
        return(
            <a style={{color:"white" , textDecoration:"none"}} href={value.url} target="blank">
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={value.urlToImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {(value.title)}
                </Typography>
                <Typography variant="body2" style={{color:"white"}} component="p">
                 {value.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </a>
        )
    })}
   
    </div>
  );
}
