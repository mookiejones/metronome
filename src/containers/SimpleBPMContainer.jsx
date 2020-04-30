import React, { useContext, useState } from "react";
import { DataContext } from '../DataProvider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Remove from '@material-ui/icons/Remove';
import PlayArrow from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles({
    root: {
    },
});


export default function SimpleBPMContainer() {
    const classes = useStyles();
    const { value, setValue, increment, decrement } = useContext(DataContext);
    const [running, setRunning] = useState(false);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleRunChange = (e) => {
        debugger;

    }


    return (
        <div className={classes.root}>
            <Grid container>

                <Grid item xs={10}>
                    <Typography id="continuous-slider" gutterBottom>
                        {value} BPM
            </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton>

                        <PlayArrow fontSize='large' onClick={handleRunChange} />
                    </IconButton>
                </Grid>

            </Grid>



            <Grid container spacing={3}>
                <Grid item>   <IconButton onClick={decrement}>
                    <Remove fontSize='large' />
                </IconButton>
                </Grid>
                <Grid item xs>


                    <Slider
                        value={value}
                        step={5}
                        min={1}
                        max={150}
                        onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <IconButton onClick={increment}>
                        <Add fontSize='large' />
                    </IconButton>
                </Grid>
            </Grid>

        </div>
    );


}