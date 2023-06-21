import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { retry } from 'redux-saga/effects';
import EcommerceContext from './Context/EContext';


    
    export default function CardDetails(props) {

        const {cart,setCart}  =  React.useContext(EcommerceContext);

        const addToCart = ()=> {

          

            let myselectedItems = [...cart];

            

            if(myselectedItems.length == 0)
            {

                myselectedItems.push({ item : props.item, count: 1});

            }
            else
            {

                let d = myselectedItems.findIndex((value)=> {

                    return value.item.id == props.item.id;

                });

                if(d >=0)
                {
                
                    myselectedItems = myselectedItems.map((value)=> {

                        if(value.item.id == props.item.id)
                        {

                            return {item: value.item, count : value.count +1}
                        }
                        
                        return value;

                    })
                }

                else
                {
                    myselectedItems.push({ item : props.item, count: 1});

                }

                

            }

            setCart(myselectedItems);

        }
      return (
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image= {props.item.image}
            title={props.item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {props.item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.item.description.slice(0,30)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={addToCart}>Add To Cart</Button>
         
          </CardActions>
        </Card>

        </Grid>
      );
    }

