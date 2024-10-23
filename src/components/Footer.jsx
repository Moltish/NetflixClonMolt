import React from "react";
import "../components/Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <div className="icon">
        <ul>
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <div className="first">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="second">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Legal Notices</li>
            <li>Do Not Sell or Share My Personal Information</li>
          </ul>
        </div>
        <div className="third">
          <ul>
            <li>Gift Cards</li>
            <li>Netflix Shop</li>
            <li>Cookie Preferences</li>
            <li>Ad Choices</li>
          </ul>
        </div>
        <div className="fourth">
          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>

      <div className="last">
        <div className="service">
          <h3>Service Code</h3>
        </div>

        <div className="copyRight">
          <h4>1997-2024 Netflix, Inc.</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
