import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './footer.css'
function Footer() {
  return (
    <div>
  
   <footer className="bg-dark text-white text-center text-lg-start">
  
  <div className="container p-4">
    <div className="row">

      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Our Services</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact</h5>

        <ul className="list-unstyled mb-0">
          <li>
          <a href=""
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>          </li>
          <li>
          <a href=""
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
          </li>
          <li>
          <a href="" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
          </li>
          
          <li>
          <a href=""
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
          </li>
        </ul>
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="/about" >About</a>
          </li>
          <li>
            <a href="/disclaimer" >Disclaimer</a>
          </li>
          <li>
            <a href="/privacyPolicy" >PrivacyPolicy</a>
          </li>
          <li>
            <a href="/termsAndCondition" >Terms&condition</a>
          </li>
          <li>
            <a href="/complaint" >Complaint</a>
          </li>
        </ul>
      </div>
      
    </div>

  </div>


  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
  All rights are Reserved.  © 2021 Copyright:&nbsp;
    <a className="text-blue" href="/">WebServ4u.com</a>
  </div>

</footer>
    </div>
  );
}

export default Footer;
