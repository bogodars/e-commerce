import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name} />
        <CardContent>
          <div className='classes.cardContent'>
            <Typography variant='h5' gutterBottom component='h2'>
              {product.name}
            </Typography>
            <Typography gutterBottom variant='h5' component='h2'>
              {product.price}
            </Typography>
          </div>
          <Typography variant='body2' color='textSecondary'>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-lable='Add to Cart'>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
