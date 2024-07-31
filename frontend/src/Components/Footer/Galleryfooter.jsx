import React from 'react'
import './Footer.css'
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
const Galleryfooter = () => {
  return (
    <>
    <footer className="footer-sec" style={{ marginTop:"40%"}}>
      <div className="footer-links">
        <div className="quicklink">
          <h2 style={{ textAlign: "center", color: "#fff" }}>Quick links</h2>
          <ul
            style={{
              listStyle: "none",
              textAlign: "start",
              width: 100,
              marginLeft: 135,
              marginTop: 20,
              fontSize: 16,
              lineHeight: 1.5,
              color: "#ffffff80",
              cursor: "pointer",
            }}
          >
            <li>About Us</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Rooms</li>
          </ul>
        </div>
        <div className="support">
          <h2 style={{ textAlign: "center", color: "#fff" }}>support</h2>
          <ul
            style={{
              listStyle: "none",
              textAlign: "start",
              width: 100,
              marginLeft: 155,
              marginTop: 20,
              fontSize: 16,
              lineHeight: 1.5,
              color: "#ffffff80",
            }}
          >
            <li>Our location</li>
            <li>The host</li>
            <li>About </li>
            <li>Contact</li>
            <li>Restaurant</li>
          </ul>
        </div>
        <div className="cont-info">
          <h2 style={{ textAlign: "center", color: "#fff" }}>Contact Info</h2>
          <h5
            style={{
              fontStyle: "italic",
              marginLeft: 134,
              marginTop: 20,
              fontSize: 16,
              color: "#fff",
            }}
          >
            Address:
          </h5>
          <p
            style={{
              fontStyle: "italic",
              width: 200,
              marginLeft: 135,
              marginTop: 0,
              color: "#ffffff80",
            }}
          >
            98 West 21th Street, Suite 721 New York NY 10016
          </p>
          <h5
            style={{
              fontStyle: "italic",
              marginLeft: 134,
              marginTop: 20,
              fontSize: 16,
              color: "#fff",
            }}
          >
            Phone:
          </h5>
          <p
            style={{
              fontStyle: "italic",
              width: 200,
              marginLeft: 135,
              marginTop: 0,
              color: "#ffffff80",
            }}
          >
            (+1) 435 3533
          </p>
          <h5
            style={{
              fontStyle: "italic",
              marginLeft: 134,
              marginTop: 20,
              fontSize: 16,
              color: "#fff",
            }}
          >
            Email:
          </h5>
          <p
            style={{
              fontStyle: "italic",
              width: 200,
              marginLeft: 135,
              marginTop: 0,
              color: "#ffffff80",
            }}
          >
            info@yourdomain.com
          </p>
        </div>
        <div className="subscribe">
          <h2 style={{ textAlign: "center", color: "#fff" }}>Subscribe</h2>
          <h5
            style={{
              fontStyle: "italic",
              marginLeft: 134,
              marginTop: 20,
              fontSize: 16,
              color: "#fff",
            }}
          >
            Sign up for our newsletter:
          </h5>
          <div
            className="search-bar"
            style={{
              width: 250,
              marginLeft: 100,
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "1px solid gray",
            }}
          >
            <input
              style={{
                fontStyle: "italic",
                marginLeft: 30,
                marginTop: 5,
                fontSize: 16,
                padding: 5,
                border: "none",
                background: "#1a1a1a",
              }}
              type="text"
              name="text"
              placeholder="Search here..."
            />
            <SiMinutemailer style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
      <div className="footer-copywrite">
        <h3
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 10,
            color: "#ffffff80",
          }}
        >
          Copyright © 2024 All rights reserved | This template is made with by
          Colorlib
        </h3>
        <div
          className="footer-icons"
          style={{
            width: "15%",
            marginLeft: "45%",
            height: 50,
            marginTop: 5,
          }}
        >
          <FaFacebook style={{ width: 40, height: 30, color: "#ffffff80" }} />
          <FaTwitter style={{ width: 40, height: 30, color: "#ffffff80" }} />
          <RiInstagramFill
            style={{ width: 40, height: 30, color: "#ffffff80" }}
          />
          <RiLinkedinBoxFill
            style={{ width: 40, height: 30, color: "#ffffff80" }}
          />
          <FaYoutube style={{ width: 40, height: 30, color: "#ffffff80" }} />
        </div>
      </div>
    </footer>
  </>
  )
}

export default Galleryfooter