import React, { useLayoutEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Container } from '@material-ui/core';
import luis from './images/luis.jpg';
import adam from './images/adam.jpg';
import yankee from './images/yankee.jpg';
import cardi from './images/cardi.jpg';
import beiber from './images/beiber.jpg';
import imagine from './images/ImagineDragons.jpg';
import alan from './images/alan-walker.jpg';
import snake from './images/snake.jpg';
import taylor from './images/taylor.jpg';
import selena from './images/selena.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const tileData = [
     
       {
        img: adam,
         title: 'Adam Levine',
         featured: true, 
       },
      {
       img: cardi,
        title: 'Cardi B',
        featured: true, 
      },
      {
        img: beiber,
        title: 'Justin Beiber',
        featured: true,
      },
      {
       img: imagine,
        title: 'Imagine Dragons',
        featured: true, 
      },
      {
        img: selena,
        title: 'Selena Gomez',
        featured: true,
      },
      {
       img: alan,
        title: 'Alan Walker',
        featured: true, 
      },
      {
        img: snake,
         title: 'DJ Snake',
         featured: true, 
       },
       {
        img: taylor,
         title: 'Taylor Swift',
         featured: true, 
       },
       {
        img: yankee,
         title: 'Daddy Yankee',
         featured: true, 
       },
       {
        img: luis,
         title: 'Luis Fonsi',
         featured: true, 
       },
     ];

    export default function ImageGridList() {
          const classes = useStyles();
      
        return (
          
            <div className={classes.root}>
              <Container maxWidth="lg">
                <GridList cellHeight={350} >                    
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} />
                                }       
                            />
                        </GridListTile>
                    ))}
                </GridList>
                </Container>
            </div>
        );
}