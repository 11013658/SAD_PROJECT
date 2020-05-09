import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Believer from './tracks/believer';
import Blankspace from './tracks/blankspace';
import { Button } from '@material-ui/core';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import AlbumIcon from '@material-ui/icons/Album';
import ImageGridList from './grid';
import Youbelong from './tracks/youbelong';
import On from './tracks/on';
import Thunder from './tracks/thunder';
import Taki from './tracks/taki';
import Girls from './tracks/girls';
import Faded from './tracks/faded';
import Despacito from './tracks/despacito';
import Letme from './tracks/letme';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="App"> 
      <Button startIcon={<ExitToAppSharpIcon />} size="large" variant="outlined" color="secondary">
        <Link to='/dashboard'> Want to logout? </Link>
      </Button>
    </div>
    <div className={classes.root}>
      
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
        <Tab label="Artists" icon={<AlbumIcon />} {...a11yProps(0)} />
      </Tabs>
      
      <TabPanel value={value} index={0}>
        <Believer />
        <Blankspace />
        <Despacito />
        <Faded />
        <Girls />
        <Letme />
        <On />        
        <Thunder />
        <Taki />
        <Youbelong />
      </TabPanel>
            
      <TabPanel value={value} index={1}>
        <ImageGridList />
      </TabPanel>
    </div>
    </>
  );
}
