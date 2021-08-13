import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import ExerciseList from '../components/ExerciseList';
import PropTypes from 'prop-types';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        typography: {
            fontFamily: 'Yatra One',
        },
    },

}));

export default function ScrollableTab() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const appBar = {
        position: 'fixed',
        top: 65
    };

    return (
        <div>
            <AppBar color="default" style={appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Exercícios" {...a11yProps(0)} />
                    <Tab label="Desafios" {...a11yProps(1)} />
                    <Tab label="Ranking" {...a11yProps(2)} />
                    <Tab label="Sobre" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <Grid container>
                <TabPanel value={value} index={0}>
                    <Grid item>
                        <ExerciseList />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ExerciseList />
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Grid item>
                        <ExerciseList />
                    </Grid>
                    <Grid item>
                        <ExerciseList />
                    </Grid>
                    <Grid item>
                        <ExerciseList />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ExerciseList />
                </TabPanel>
            </Grid>
        </div >
    );

}

