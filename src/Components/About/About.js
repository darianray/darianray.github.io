import './style.scss';

import { CardActionArea, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

import seniorPhoto from '../../PortfolioImages/resumePhoto.jpg';

export default function About() {
  return (
    <>
      <div className="about">
        <div className="div-container">
          <div className="home-div-container">
            <div className="left-home-div">
              {/*<img className="senior-photo-img" src={seniorPhoto} alt="front of fountain"/> */}
              <Paper className="home-paper" elevation={0}>
                <Card>
                  <CardActionArea href="https://github.com/darianray/Vehicle-Selector">
                    <CardMedia
                      component="img"
                      height="450"
                      width="100"
                      image={seniorPhoto}
                      alt="person buying car cartoon"
                    />
                  </CardActionArea>
                </Card>
                <div className="paragraph-div">
                  <h1>Hi, My name is Darian!</h1>
                  I'm a 22 year old graduate in Software Development at Lander
                  University who's passionate about learning and implementing
                  new technologies. From the age of 13, I've always been
                  interested in the world of programming and the vast amount of
                  knowledge available in my career field. I have had an
                  internship at EPRI (Electric Power Research Institute) and
                  have won numerous awards at my University for development
                  projects. These include two of the projects listed below
                  (ParkSmart and Okami Jump). I also explored the creative side
                  of development during my time in University by completing a
                  minor in Digital Design. This makes me an incredibly versatile
                  developer that can integrate both broad knowledge of new
                  technologies with creative skills in UI implementation.
                </div>
                <button
                  className="resume-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://drive.google.com/file/d/152Z9iM0yx8Rum57ouYPzv3h4psJRz325/view?usp=sharing";
                  }}
                >
                  Download CSV
                </button>
              </Paper>
            </div>
            <div className="right-home-div">
              <Card className="resume-edu-card">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong> Education </strong>
                  </Typography>
                  <div>
                    <strong>
                      {" "}
                      B.S. Software Development/ Digital Design Minor{" "}
                    </strong>
                    <br />
                    <i>2018- 2021, Lander University, Greenwood, SC </i>
                    <br />
                    <ul className="unordered-list">
                      <li className="ordered-list">
                        {" "}
                        Cumulative GPA: 3.7/4.0, Dean’s List every semester{" "}
                      </li>
                      <li className="ordered-list">
                        Life, Life Enhancement Scholarship, SEOG grant, and
                        LUACAD Recipient{" "}
                      </li>
                      <li className="ordered-list">
                        1st in class in biennial senior competition for CIS 499
                        Senior competition: ParkSmart{" "}
                      </li>
                      <li className="ordered-list">
                        Paid all college expenses through scholarships, IT
                        position, and freelance employment
                      </li>
                    </ul>
                    <strong>Software Development </strong>
                    <br />
                    <i> 2017-2018, Piedmont Technical College, Greenwood, SC</i>
                    <ul className="unordered-list">
                      <li className="ordered-list">
                        4.0 GPA, President’s List every semester
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card className="resume-skills-card">
                <CardContent>
                  <div>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>LANGUAGES </strong>
                    </Typography>

                    <ul className="unordered-list-bullets">
                      <li> Java</li>
                      <li>Python</li>
                      <li>C/C++</li>
                      <li>JavaScript</li>
                    </ul>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>WEB DEVELOPMENT </strong>
                    </Typography>

                    <ul className="unordered-list-bullets">
                      <li> Node.js</li>
                      <li>ReactJS Framework</li>
                      <li>Bootstrap</li>
                      <li>JSX</li>
                      <li>Firebase, REST APIs</li>
                    </ul>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>DATABASES </strong>
                    </Typography>

                    <ul className="unordered-list-bullets">
                      <li>JSON</li>
                      <li>MongoDB</li>
                      <li>Microsoft SQL Server</li>
                    </ul>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>TOOLS / SOFTWARE </strong>
                    </Typography>

                    <ul className="unordered-list-bullets">
                      <li>Visual Studio</li>
                      <li>Eclipse / Netbeans</li>
                      <li>UML modeling</li>
                      <li> Adobe Creative Cloud </li>
                    </ul>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>SKILLS </strong>
                    </Typography>

                    <ul className="unordered-list-bullets">
                      <li> Scrum / Agile Methodologies</li>
                      <li> Numerical Simulation</li>
                      <li>Regression Analysis</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
