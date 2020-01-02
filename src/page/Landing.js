import React from 'react';
import '../style.css';
import firstPic from '../pic/firstPic.png';
import { Grid, Paper } from '@material-ui/core/';
const Landing = () => {
    return (
        <div>
            <Paper square elevation={0} fullWidth>
                <Grid direction='row' container>
                    <Grid container item md={6}>
                        <img id='picFirstLanding' src={firstPic} width='600' style={{ marginLeft: "20%" }}/>
                    </Grid>
                    <Grid item md={6}>
                        <div>
                            <h1>ACTTIME</h1>
                            <h2>Platform to find the job what you love</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    );
};

export default Landing;