import React, { Component } from "react";
import { Link } from "react-scroll";
import "./style.scss";


class Header extends Component {
  state = {
    backgroundColor: "transparent",
    color: "white",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 300) {
      this.setState({
        backgroundColor: "#FFF",
        color: "white",
      
      });
    } else {
      this.setState({
        backgroundColor: "transparent",
        color: "white",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div
        className="container-fluid"
        id="headerContainer"
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.color,
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-around",
          }}
          id="headerUl"
        >
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              className="headerLi"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} className="headerLi">
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true} className="headerLi">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="blog" spy={true} smooth={true} className="headerLi">
              Blog
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} className="headerLi">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default Header;