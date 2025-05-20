import React from "react";
import "./footer.css";
import Footerbg from "../icon/footer3.png";
import LinkedInLogo from "../icon/LinkedIn-in.svg";
import YoutubeLogo from "../icon/youtube.svg";
import FacebookLogo from "../icon/facebook-f.svg";
import InstagramLogo from "../icon/instagram.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  return (
    <footer className="footer">
      <img src={Footerbg} alt="Mockup" style={{ width: "100%" }} />
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Navigation Links */}
          {isDesktop ? (
            <nav className="footer-nav">
              <a href="#services">Services</a>
              <a href="#works">Works</a>
              <a href="#insights">Insights</a>
              <a href="#career">Career</a>
              <a href="#contact">Contact Us</a>
            </nav>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <nav className="footer-nav">
                  <a href="#services">Services</a>
                  <a href="#works">Works</a>
                  <a href="#insights">Insights</a>
                </nav>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >  <nav className="footer-nav">
                <a href="#career">Career</a>
                <a href="#contact">Contact Us</a>
                 </nav>
              </div>
            </>
          )}
        </div>
        <div className="footer-social">
          {/* Social Media Icons */}
          <div className="footer-social">
            <a
              href="https://linkedin.com "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="social-icon">
                <img src={LinkedInLogo} alt="LinkedInLogo" />
              </span>
            </a>
            <a
              href="https://facebook.com "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span className="social-icon">
                <img src={FacebookLogo} alt="FacebookLogo" />
              </span>
            </a>
            <a
              href="https://instagram.com "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="social-icon">
                <img src={InstagramLogo} alt="InstagramLogo" />
              </span>
            </a>
            <a
              href="https://youtube.com "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <span className="social-icon">
                <img src={YoutubeLogo} alt="YoutubeLogo" />
              </span>
            </a>
          </div>
        </div>

        {/* Divider Line */}

        {/* Bottom Section */}
        
       
          {isDesktop ? (
             <div className="footer-bottom"><div className="footer-copyright">
            <span style={{ fontFamily: "Montserrat", fontSize: "12px" }}>
              © COPYRIGHT GROWTHOPS. ALL RIGHTS RESERVED.
            </span>
          </div> 
          <div className="footer-links">
            <a
              href="https://your-official-site.com "
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to global GrowthOps website
            </a>
            <a href="/privacy-policy">Privacy & Policy</a>
          </div> </div>) : (<>
           <div style={{justifyContent:'center', marginTop:'3rem'}} > 
            <span
            style={{display:'block'}}> 
            {/* <a
              href="https://your-official-site.com "
              target="_blank"
              rel="noopener noreferrer"
            > */}
              Go to global GrowthOps website
            {/* </a> */}
            </span>
            <span
            style={{display:'block',marginTop:'2rem'}}>
              {/* <a href="/privacy-policy"> */}
              Privacy & Policy
              {/* </a> */}
              </span></div></>)}
          

          
        
        </div>
    
    </footer>
  );
};

export default Footer;
