import { useState, useEffect } from "react";

// import GrowthOps from './assets/Layer_1.svg'
import viteLogo from "/vite.svg";
import "../react-component/body/App.css";
import NavBar from "../react-component/nav_bar/nav_bar";
import Mockup from "../react-component/icon/Rectangle 87.svg";
import UOB from "../react-component/icon/image 29.svg";
import Toyota from "../react-component/icon/image 35.svg";
import Posb from "../react-component/icon/image 53.svg";
import Singlife from "../react-component/icon/image 52.svg";
import Amway from "../react-component/icon/image 47.svg";
import FitnessFirst from "../react-component/icon/image 55.svg";
import Sony from "../react-component/icon/image 42.svg";
import XrVision from "../react-component/icon/image 57.svg";
import Cimb from "../react-component/icon/image 54.svg";
import Rhb from "../react-component/icon/image 31.svg";
import Nikko from "../react-component/icon/image 37.svg";
import MannHummel from "../react-component/icon/image 39.svg";
import Chubb from "../react-component/icon/image 44.svg";
import Ntvc from "../react-component/icon/image 38.svg";
import Taylor from "../react-component/icon/image 46.svg";
import Esplenade from "../react-component/icon/image 58.svg";
import Number1 from "../react-component/icon/number1.svg";
import Number2 from "../react-component/icon/number2.svg";
import Number3 from "../react-component/icon/number3.svg";
import Number4 from "../react-component/icon/number4.svg";
import MobileHeader from "../react-component/icon/Group 2.svg";
import Eclipse from "../react-component/icon/Ellipse 14.svg";
import Preloader from "../react-component/preloader/preloader";
import Header from "../react-component/icon/Header.png";
import Tab from "../react-component/tab/tab";
import Footer from "../react-component/footer/footer";
import PillButton from "../react-component/button/button";
import { useNavigate } from "react-router-dom";
import BarChart from "../react-component/barchart/barchart";

function homepage() {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const [isPreloading, setIsPreloading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Simulate loading delay (adjust as needed)
    const preloaderTimer = setTimeout(() => {
      setIsPreloading(false);
    }, 2000); // Duration of preloader display

    // Start content animation after preloader animation completes
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // 2000ms preloader + 1000ms preloader exit animation

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const tabs = [
    {
      label: "Telco",
      content: (
        <div style={{ textAlign: "left" }}>
          <span style={{ fontSize: isDesktop ? "24px" : "20px" }}>
            {" "}
            " Through this initiative, GrowthOps have shown to have the right
            capabilities to take out platform to the next level. We believe the
            refreshed U.COM.MY will equip is to make more data-led decisions
            that will result in new digital experiences that will truly benefit
            our customers.
          </span>
        </div>
      ),
    },
    {
      label: "Insurance",
      content: (
        <div style={{ textAlign: "left" }}>
          <span style={{ fontSize: isDesktop ? "24px" : "20px" }}>
            Through this initiative, GrowthOps have shown to have the right
            capabilities to take out platform to the next level. We believe the
            refreshed U.COM.MY will equip is to make more data-led decisions
            that will result in new digital experiences that will truly benefit
            our customers.
          </span>
        </div>
      ),
    },
    {
      label: "Fintech",
      content: (
        <div style={{ textAlign: "left" }}>
          <span style={{ fontSize: isDesktop ? "24px" : "20px" }}>
            Through this initiative, GrowthOps have shown to have the right
            capabilities to take out platform to the next level. We believe the
            refreshed U.COM.MY will equip is to make more data-led decisions
            that will result in new digital experiences that will truly benefit
            our customers.
          </span>
        </div>
      ),
    },
    {
      label: "IT",
      content: (
        <div style={{ textAlign: "left" }}>
          <span style={{ fontSize: isDesktop ? "24px" : "20px" }}>
            Through this initiative, GrowthOps have shown to have the right
            capabilities to take out platform to the next level. We believe the
            refreshed U.COM.MY will equip is to make more data-led decisions
            that will result in new digital experiences that will truly benefit
            our customers.
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      {isDesktop ? (
        <>
          {" "}
          <Preloader isActive={isPreloading} />
          <main className={`landing-content ${showContent ? "animate" : ""}`}>
            <NavBar />

            <div
              style={{ backgroundImage: ` url(${Header})`, height: "1000px" }}
            >
              <h1 style={{ textAlign: "left", fontSize: "96px" }}>
                YOUR NEW-BREED,
              </h1>
              <h1 style={{ textAlign: "right", fontSize: "96px" }}>
                END-TO-END
              </h1>
              <h1 style={{ textAlign: "left", fontSize: "96px" }}>
                DIGITAL ALLY
              </h1>
            </div>

            <div
              className="card"
              style={{ textAlign: "center", marginTop: "10rem" }}
            >
              <span style={{ fontSize: "32px", display: "block" }}>
                With a focus in fusing{" "}
                <span style={{ color: "#47F4FF" }}>strategy</span>
              </span>
              <span style={{ fontSize: "32px", display: "block" }}>
                <span style={{ color: "#47F4FF" }}>design </span> and{" "}
                <span style={{ color: "#47F4FF" }}>{`</technology>`}</span> to
              </span>
              <span style={{ fontSize: "32px", display: "block" }}>
                build and sustain market leaders
              </span>
            </div>
            <div className="card">
              <span style={{ fontSize: "32px", display: "block" }}>
                this is
              </span>
            </div>
            <div className="card">
              <h1 className="gradient-text" style={{ fontSize: "96px" }}>
                GrowthOps Asia
              </h1>
            </div>
            <div className="card">
              <h1 style={{ fontSize: "88px" }}>WHAT WE DO</h1>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                 <img
                  src={Number1}
                  alt="Mockup"
                  style={{ width: "48px", height: "48px" }}
                />
                <h2 style={{ textAlign: "left", fontSize: "40px" }}>
                  Performance Marketing & Analytics
                </h2>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Performance Media
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Search Engine Optimization
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Web & App Analysis
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Conversion Rate Optimization through Personalization
                </span>
                <div
                  style={{
                    marginTop: "1.5rem",
                    justifyContent: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  <PillButton
                    label="See More"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "black",
                      width: "121px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "60%",
                }}
              >
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "793px", height: "588px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "793px", height: "588px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                 <img
                  src={Number2}
                  alt="Mockup"
                  style={{ width: "48px", height: "48px" }}
                />
                <h2 style={{ textAlign: "left", fontSize: "40px" }}>
                  Digital-First Creative
                </h2>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Brand & Marketing Strategy
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Content Hubs
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Creative Services
                </span>
                <div
                  style={{
                    marginTop: "1.5rem",
                    justifyContent: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  <PillButton
                    label="See More"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "black",
                      width: "121px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
               <img
                  src={Number3}
                  alt="Mockup"
                  style={{ width: "48px", height: "48px" }}
                />
                <h2 style={{ textAlign: "left", fontSize: "40px" }}>
                  Marketing Technology
                </h2>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Technology Consulting
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  MarTech Deployment & Partnerships
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Cloud Readiness & Migration
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Mobile Development
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Custom Web Development
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Solution Architecture
                </span>
                <div
                  style={{
                    marginTop: "1.5rem",
                    justifyContent: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  <PillButton
                    label="See More"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "black",
                      width: "121px",
                    }}
                  />
                </div>
              </div>
              <div>
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "793px", height: "588px" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "60%",
                }}
              >
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "793px", height: "588px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                 <img
                  src={Number4}
                  alt="Mockup"
                  style={{ width: "48px", height: "48px" }}
                />
                <h2 style={{ textAlign: "left", fontSize: "40px" }}>
                  Experience Design & Strategy
                </h2>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  Digital Transformation & Change Management
                </span>
                <span
                  style={{
                    textAlign: "left",
                    display: "block",
                    marginTop: "1rem",
                    fontSize: "16px",
                  }}
                >
                  User Experience Strategy and Design
                </span>
                <div
                  style={{
                    marginTop: "1.5rem",
                    justifyContent: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  <PillButton
                    label="See More"
                    style={{
                      border: "1px solid white",
                      backgroundColor: "black",
                      width: "121px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: "10rem" }}>
             
              <span className="logo-text" style={{ fontSize: "88px", fontWeight:'bold', display:'block' }}>UNFORGETTABLE </span>
              <span style={{ fontSize: "88px", fontWeight:'bold', display:'block', marginTop:'1rem' }}>RESULTS </span>

            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "40%",
                }}
              >
                <div style={{ textAlign: "left", marginBottom: "3rem" }}>
                  <div>
                    <span
                      style={{
                        color: "#07DDDA",
                        fontSize: "64px",
                        fontWeight: "bold",
                      }}
                    >
                      400%
                    </span>
                  </div>
                  <div style={{ marginBottom: "0.5rem" }}>
                    {" "}
                    <span style={{ color: "#07DDDA", fontSize: "14px" }}>
                      INCREASE IN ORGANIC PAGE VIEWS
                    </span>
                  </div>
                  <div>
                    <span>
                      Using our SEO services, it also resulted in a 109%
                      increase in page visibility
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: "left", marginBottom: "3rem" }}>
                  <div>
                    <span
                      style={{
                        color: "#07DDDA",
                        fontSize: "64px",
                        fontWeight: "bold",
                        display: "block",
                      }}
                    >
                      96%
                    </span>
                  </div>
                  <div style={{ marginBottom: "0.5rem" }}>
                    {" "}
                    <span style={{ color: "#07DDDA", fontSize: "14px" }}>
                      FASTER PAGE LAUNCHES
                    </span>
                  </div>
                  <div>
                    <span>Using AEM, a leading Telco saw these results</span>

                    <BarChart percentage={75} />

                    <span>Campaign launches from 7 days to 2 days</span>

                    <BarChart percentage={90} />

                    <span>Page launches cut from 2 days to 2 hours</span>
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <div>
                    <div>
                      <span
                        style={{
                          color: "#07DDDA",
                          fontSize: "64px",
                          fontWeight: "bold",
                        }}
                      >
                        38%
                      </span>
                    </div>
                    <div style={{ marginBottom: "0.5rem" }}>
                      {" "}
                      <span style={{ color: "#07DDDA", fontSize: "14px" }}>
                        CONVERSION RATE IMPROVEMENT
                      </span>
                    </div>
                    <div>
                      <span>
                        Using Adobe Target to A/B test landing pages' forms, we
                        saw an increase in conversion rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "40%",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <div>
                    <span
                      style={{
                        color: "#07DDDA",
                        display: "block",
                        fontSize: "64px",
                        fontWeight: "bold",
                      }}
                    >
                      4.5%
                    </span>
                  </div>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ color: "#07DDDA", display: "block" }}>
                      INCREASE IN SALES
                    </span>
                  </div>
                  <div>
                    <span style={{ display: "block" }}>
                      Through our creative services, a national automake
                      experienced a 4.5% increase in sales amidst a 4.6% market
                      decline. They also had 2% increase in market share, and a
                      5.6 point shift in brand perception
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "left" }}>
                  <div>
                    <span
                      style={{
                        color: "#07DDDA",
                        fontSize: "64px",
                        fontWeight: "bold",
                      }}
                    >
                      71%
                    </span>
                  </div>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span
                      style={{
                        textAlign: "left",
                        color: "#07DDDA",
                        fontSize: "14px",
                      }}
                    >
                      REDUCTION IN CPL
                    </span>
                  </div>
                  <div>
                    <span style={{ textAlign: "left" }}>
                      After optimising the performance media funnel, a leading
                      bank saw savings over AUD$300 in the first year
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: "10rem" }}>
              <h1 style={{ fontSize: "5rem" }}>WHAT CLIENTS SAY</h1>
            </div>

            <Tab tabs={tabs} initialIndex={0} />

            <div className="card" style={{ marginTop: "10rem" }}>
              <span style={{ fontSize: "88px",display:'block',fontWeight:'bold' }}><span className="logo-text-super">SUPER</span> PROUD TO </span>
            <span style={{ fontSize: "88px",display:'block',fontWeight:'bold' }}>WORK WITH</span></div>

            <div className="scroller">
              <div className="scroller__inner">
                {/* Repeat logos to create a seamless loop */}
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
                {/* Duplicate for smooth loop */}
                <img src={Amway} alt="Logo 1" className="logo" />
                <img src={FitnessFirst} alt="Logo 2" className="logo" />
                <img src={Sony} alt="Logo 3" className="logo" />
                <img src={XrVision} alt="Logo 4" className="logo" />
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
              </div>
            </div>
            <div className="scroller">
              <div className="scroller__inner_1">
                {/* Repeat logos to create a seamless loop */}
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
                {/* Duplicate for smooth loop */}
                <img src={Amway} alt="Logo 1" className="logo" />
                <img src={FitnessFirst} alt="Logo 2" className="logo" />
                <img src={Sony} alt="Logo 3" className="logo" />
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
              </div>
            </div>
            <div className="scroller">
              <div className="scroller__inner">
                {/* Repeat logos to create a seamless loop */}
                <img src={Cimb} alt="Logo 1" className="logo" />
                <img src={Rhb} alt="Logo 2" className="logo" />
                <img src={Nikko} alt="Logo 3" className="logo" />
                <img src={MannHummel} alt="Logo 4" className="logo" />
                {/* Duplicate for smooth loop */}
                <img src={Chubb} alt="Logo 5" className="logo" />
                <img src={Ntvc} alt="Logo 6" className="logo" />
                <img src={Taylor} alt="Logo 7" className="logo" />
                <img src={Esplenade} alt="Logo 8" className="logo" />
                <img src={Ntvc} alt="Logo 9" className="logo" />
                <img src={Taylor} alt="Logo 10" className="logo" />
                <img src={Esplenade} alt="Logo 11" className="logo" />
              </div>
            </div>

            <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
              {" "}
              <PillButton
                label="Let's Chat"
                onClick={() => {
                  navigate("/contactus");
                }}
                style={{ backgroundColor: "#33FF85" }}
              />
            </div>

            <Footer />
          </main>
        </>
      ) : (
        <>
          <Preloader isActive={isPreloading} />
          <main className={`landing-content ${showContent ? "animate" : ""}`}>
            <NavBar />

<section className="header-section">
     <h1 style={{ textAlign: "left", fontSize: "32px" }}>
              YOUR NEW-BREED,
            </h1>
            <h1 style={{ textAlign: "right", fontSize: "32px" }}>END-TO-END</h1>
            <h1 style={{ textAlign: "left", fontSize: "32px" }}>
              DIGITAL ALLY
            </h1>
            <div className="card" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14px", display: "block" }}>
                We are an award-winning{" "}
              </span>
              <span style={{ fontSize: "14px", display: "block" }}>
                marketing transformation
              </span>
              <span style={{ fontSize: "14px", display: "block" }}>
                partner delivering{" "}
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                  unforgettable
                </span>
              </span>
              <span style={{ fontSize: "14px", display: "block" }}>
                digital brands, experiences and
              </span>
              <span style={{ fontSize: "14px", display: "block" }}>
                technology
              </span>
            </div>
</section>
         

            <div className="card">
              <h1 style={{ fontSize: "35px" }}>WHAT WE DO</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "327px", height: "292px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
            <img
                  src={Number1}
                  alt="Mockup"
                  style={{ width: "40px", height: "40px" }}
                />
              <h2 style={{ textAlign: "left", fontSize: "24px" }}>
                Performance Marketing & Analytics
              </h2>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Performance Media
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Search Engine Optimization
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Web & App Analysis
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Conversion Rate Optimization through Personalization
              </span>
              <div
                style={{
                  marginTop: "1.5rem",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <PillButton
                  label="See More"
                  style={{
                    border: "1px solid white",
                    backgroundColor: "black",
                    width: "121px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "5rem",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "327px", height: "292px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
             <img
                  src={Number2}
                  alt="Mockup"
                  style={{ width: "40px", height: "40px" }}
                />
              <h2 style={{ textAlign: "left", fontSize: "24px" }}>
                Digital-First Creative
              </h2>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Brand & Marketing Strategy
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Content Hubs
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Creative Services
              </span>
              <div
                style={{
                  marginTop: "1.5rem",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <PillButton
                  label="See More"
                  style={{
                    border: "1px solid white",
                    backgroundColor: "black",
                    width: "121px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "5rem",
                justifyContent: "center",
              }}
            >
              <div>
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "327px", height: "292px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
                <img
                  src={Number3}
                  alt="Mockup"
                  style={{ width: "40px", height: "40px" }}
                />
              <h2 style={{ textAlign: "left", fontSize: "24px" }}>
                Marketing Technology
              </h2>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Technology Consulting
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                MarTech Deployment & Partnerships
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Cloud Readiness & Migration
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Mobile Development
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Custom Web Development
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Solution Architecture
              </span>
              <div
                style={{
                  marginTop: "1.5rem",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <PillButton
                  label="See More"
                  style={{
                    border: "1px solid white",
                    backgroundColor: "black",
                    width: "121px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "5rem",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={Mockup}
                  alt="Mockup"
                  style={{ width: "327px", height: "292px" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
             <img
                  src={Number4}
                  alt="Mockup"
                  style={{ width: "40px", height: "40px" }}
                />
              <h2 style={{ textAlign: "left", fontSize: "24px" }}>
                Experience Design & Strategy
              </h2>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                Digital Transformation & Change Management
              </span>
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  marginTop: "1rem",
                  fontSize: "16px",
                }}
              >
                User Experience Strategy and Design
              </span>
              <div
                style={{
                  marginTop: "1.5rem",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <PillButton
                  label="See More"
                  style={{
                    border: "1px solid white",
                    backgroundColor: "black",
                    width: "121px",
                  }}
                />
              </div>
            </div>

            <div
              className="card"
              style={{ textAlign: "center", marginTop: "10rem" }}
            >
              <span style={{ fontSize: "20px", display: "block" }}>
                With a focus in fusing{" "}
                <span style={{ color: "#47F4FF" }}>strategy</span>
              </span>
              <span style={{ fontSize: "20px", display: "block" }}>
                <span style={{ color: "#47F4FF" }}>design </span> and{" "}
                <span style={{ color: "#47F4FF" }}>{`</technology>`}</span> to
              </span>
              <span style={{ fontSize: "20px", display: "block" }}>
                build and sustain market leaders
              </span>
            </div>
            <div className="card">
              <span style={{ fontSize: "20px", display: "block" }}>
                this is
              </span>
            </div>
            <div className="card">
              <h1 className="gradient-text" style={{ fontSize: "36px" }}>
                GrowthOps Asia
              </h1>
            </div>

            <div className="card" style={{ marginTop: "10rem" }}>
              <h1 style={{ fontSize: "35px" }}>UNFORGETTABLE RESULTS</h1>
            </div>

<div style={{display:'flex',
  flexDirection:'column'
}}>
   <div
              style={{
                justifyContent: "flex-start",
                textAlign: "left",
                width: "50%",
              }}
            >
              <span
                style={{
                  color: "#07DDDA",
                  fontSize: "36px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                400%
              </span>
              <div style={{ marginBottom: "0.5rem" }}>
                {" "}
                <span
                  style={{
                    color: "#07DDDA",
                    fontSize: "14px",
                    display: "block",
                    textAlign: "left",
                  }}
                >
                  INCREASE IN ORGANIC PAGE VIEWS
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    display: "block",
                    textAlign: "left",
                  }}
                >
                  Using our SEO services, it also resulted in a 109% increase in
                  page visibility
                </span>
              </div>
            </div>

            <div
              style={{
                display:'flex',
                textAlign: "left",
                justifyContent: "flex-end",
                flexDirection:'column',
                alignSelf:'flex-end',
                width: "50%",
                marginTop:'3rem'
              }}
            >
              <span
                style={{
                  color: "#07DDDA",
                  display: "block",
                  fontSize: "36px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                4.5%
              </span>

              <div style={{ marginBottom: "0.5rem" }}>
                <span style={{ color: "#07DDDA", display: "block" }}>
                  INCREASE IN SALES
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  Through our creative services, a national automake experienced
                  a 4.5% increase in sales amidst a 4.6% market decline. They
                  also had 2% increase in market share, and a 5.6 point shift in
                  brand perception
                </span>
              </div>
            </div>

            <div style={{ textAlign: "left", marginTop: "3rem" }}>
              <div>
                <span
                  style={{
                    color: "#07DDDA",
                    fontSize: "36px",
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  96%
                </span>
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                {" "}
                <span style={{ color: "#07DDDA", fontSize: "14px" }}>
                  FASTER PAGE LAUNCHES
                </span>
              </div>
              <div>
                <span   style={{
                    display: "block",
                    fontSize: "14px",
                    textAlign: "left",
                  }}>Using AEM, a leading Telco saw these results</span>

                <BarChart percentage={75} />

                <span   style={{
                    display: "block",
                    fontSize: "14px",
                    textAlign: "left",
                  }}>Campaign launches from 7 days to 2 days</span>

                <BarChart percentage={90} />

                <span   style={{
                    display: "block",
                    fontSize: "14px",
                    textAlign: "left",
                  }}>Page launches cut from 2 days to 2 hours</span>
              </div>
            </div>

            <div style={{    display:'flex',
                textAlign: "left",
                justifyContent: "flex-end",
                flexDirection:'column',
                alignSelf:'flex-end',
                width: "50%",
                marginTop:'3rem' }}>
              <div>
                <div>
                  <span
                    style={{
                      color: "#07DDDA",
                      fontSize: "36px",
                      fontWeight: "bold",
                    }}
                  >
                    38%
                  </span>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  {" "}
                  <span style={{ color: "#07DDDA", fontSize: "14px" }}>
                    CONVERSION RATE IMPROVEMENT
                  </span>
                </div>
                <div>
                  <span   style={{
                    display: "block",
                    fontSize: "14px",
                    textAlign: "left",
                  }}>
                    Using Adobe Target to A/B test landing pages' forms, we saw
                    an increase in conversion rate
                  </span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "left" , marginTop: "3rem"}}>
              <div>
                <span
                  style={{
                    color: "#07DDDA",
                    fontSize: "36px",
                    fontWeight: "bold",
                  }}
                >
                  71%
                </span>
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <span
                  style={{
                    textAlign: "left",
                    color: "#07DDDA",
                    fontSize: "14px",
                  }}
                >
                  REDUCTION IN CPL
                </span>
              </div>
              <div>
                <span style={{
                    display: "block",
                    fontSize: "14px",
                    textAlign: "left",
                  }}>
                  After optimising the performance media funnel, a leading bank
                  saw savings over AUD$300 in the first year
                </span>
              </div>
            </div>
</div>
           

            <div className="card" style={{ marginTop: "10rem" }}>
              <h1 style={{ fontSize: "35px" }}>WHAT CLIENTS SAY</h1>
            </div>

            <Tab tabs={tabs} initialIndex={0} />

            <div className="card" style={{ marginTop: "10rem" }}>
              <h1 style={{ fontSize: "35px" }}>SUPER PROUD TO WORK WITH</h1>
            </div>

            <div className="scroller">
              <div className="scroller__inner">
                {/* Repeat logos to create a seamless loop */}
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
                {/* Duplicate for smooth loop */}
                <img src={Amway} alt="Logo 1" className="logo" />
                <img src={FitnessFirst} alt="Logo 2" className="logo" />
                <img src={Sony} alt="Logo 3" className="logo" />
                <img src={XrVision} alt="Logo 4" className="logo" />
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
              </div>
            </div>
            <div className="scroller">
              <div className="scroller__inner_1">
                {/* Repeat logos to create a seamless loop */}
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
                {/* Duplicate for smooth loop */}
                <img src={Amway} alt="Logo 1" className="logo" />
                <img src={FitnessFirst} alt="Logo 2" className="logo" />
                <img src={Sony} alt="Logo 3" className="logo" />
                <img src={UOB} alt="Logo 1" className="logo" />
                <img src={Toyota} alt="Logo 2" className="logo" />
                <img src={Posb} alt="Logo 3" className="logo" />
                <img src={Singlife} alt="Logo 4" className="logo" />
              </div>
            </div>
            <div className="scroller">
              <div className="scroller__inner">
                {/* Repeat logos to create a seamless loop */}
                <img src={Cimb} alt="Logo 1" className="logo" />
                <img src={Rhb} alt="Logo 2" className="logo" />
                <img src={Nikko} alt="Logo 3" className="logo" />
                <img src={MannHummel} alt="Logo 4" className="logo" />
                {/* Duplicate for smooth loop */}
                <img src={Chubb} alt="Logo 5" className="logo" />
                <img src={Ntvc} alt="Logo 6" className="logo" />
                <img src={Taylor} alt="Logo 7" className="logo" />
                <img src={Esplenade} alt="Logo 8" className="logo" />
                <img src={Ntvc} alt="Logo 9" className="logo" />
                <img src={Taylor} alt="Logo 10" className="logo" />
                <img src={Esplenade} alt="Logo 11" className="logo" />
              </div>
            </div>

            <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
              {" "}
              <PillButton
                label="Let's Chat"
                onClick={() => {
                  navigate("/contactus");
                }}
                style={{ backgroundColor: "#33FF85" }}
              />
            </div>

            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default homepage;
