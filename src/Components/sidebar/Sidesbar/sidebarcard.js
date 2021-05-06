import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { green} from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "#646466",
    color:"white",
    borderRadius:"none"

},
media: {
    height: 0 // 16:9
},
expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        padding:"0",
        margin:"0",
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

export default function RecipeReviewCard({Name}) {
  const classes = useStyles();


  return (
    (Name!=="")?
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {(Name[0])}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          
          </IconButton>
        }
        title={(Name==="")?"User":Name}
        subheader={(Name==="")?"Offline":"Online"}
        style={{textAlign:"left" , fontWeight:"400"  }}
      />
     
     
     
    </Card>:""
  );
}