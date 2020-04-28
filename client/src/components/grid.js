import React, { useLayoutEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Container } from '@material-ui/core';
import ag from './images/ag.jpg';
import adam from './images/adam.jpg';
import cam from './images/cam.jpg';
import riri from './images/riri.jpg';
import ed from './images/ed.jpg';
import liam from './images/liam.jpg';
import sm from './images/sm.jpg';
import snake from './images/snake.jfif';
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
         img: ag,
         title: 'Ariana Grande',
         featured: true,
       },
       {
        img: cam,
        title: 'Camilla Cabello',
        featured: true,
      },
       {
        img: adam,
         title: 'Adam Levine',
         featured: true, 
       },
      {
       img: riri,
        title: 'Rihanna',
        featured: true, 
      },
      {
        img: ed,
        title: 'Ed Sheeran',
        featured: true,
      },
      {
       img: liam,
        title: 'Liam Payne',
        featured: true, 
      },
      {
        img: selena,
        title: 'Selena Gomez',
        featured: true,
      },
      {
       img: sm,
        title: 'Shawn Mendes',
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