import './style.scss';

import { Box, CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

import buyCar from '../../PortfolioImages/buyCar.jpg';
import okami from '../../PortfolioImages/okami.PNG';
import car from '../../PortfolioImages/park.jpg';
import translate from '../../PortfolioImages/translate.jpg';

function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="div-container">
          <h1 className="portfolio-header">Portfolio</h1>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea href="https://github.com/darianray/ParkSmart">
                    <CardMedia
                      component="img"
                      height="140"
                      image={car}
                      alt="car parked"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        ParkSmart
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Award-winning full-stack web app capable of registering
                        vehicles and tracking lot availability through
                        integration of Raspberry Pi camera/Arduino sensor and
                        ReactJS website. Additional software; MS MySQL,
                        Firebase, Node.js, JSX, Bootstrap, and Axios
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea href="https://github.com/darianray/Vehicle-Selector">
                    <CardMedia
                      component="img"
                      height="140"
                      image={translate}
                      alt="translation"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        VoTo Translator
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        A JavaFX GUI that provides user-friendly environment for
                        voice-to-text and text-to-voice language translation.
                        Allows five languages including: French, English,
                        Japanese, Spanish, and Italian. Accomplished by
                        integrating Google Cloud APIs with Object Oriented
                        Programming
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea href="https://github.com/darianray/Okami-Jump">
                    <CardMedia
                      component="img"
                      height="140"
                      image={okami}
                      alt="platform game"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Okami Jump
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        JavaFX platform game using Adobe to design
                        levels/sprites and rendering algorithms for in-game
                        physics and precise collision detection for individual
                        project. Game includes front-end UI for menus,
                        leaderboard, file system integration, key input
                        (multi-threading), and enemy actions
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea href="https://github.com/darianray/Vehicle-Selector">
                    <CardMedia
                      component="img"
                      height="140"
                      image={buyCar}
                      alt="person buying car cartoon"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Vehicle Selection GUI
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        An intuitive JavaFX Gui built using Selenium, Maven, and Javascript that allows
                        the user to choose a vehicle from a predetermined stock of cars. The project also
                        integrates OOP design with JUnit tests to ensure there are no errors when building 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
