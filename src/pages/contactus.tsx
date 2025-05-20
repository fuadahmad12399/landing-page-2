import { useState, useEffect } from "react";

// import GrowthOps from './assets/Layer_1.svg'
import viteLogo from "/vite.svg";
import "../react-component/body/App.css";
import NavBar from "../react-component/nav_bar/nav_bar";
import Footer from "../react-component/footer/footer";
import TextField from "../react-component/textfield/textfield";
import PhoneInput from "../react-component/textfield/phoneinput";
import CircularCheckbox from "../react-component/checkbox/checkbox";
import Checkbox1 from "../react-component/checkbox/transparent/transparentcheckbox";
import PillButton from "../react-component/button/button";
import ContactCards from "../react-component/contactcards/contactcards";
import Footerbg from "../react-component/icon/footer3.png";
import LinkedInLogo from "../react-component/icon/LinkedIn-in.svg";
import YoutubeLogo from "../react-component/icon/youtube.svg";
import FacebookLogo from "../react-component/icon/facebook-f.svg";
import InstagramLogo from "../react-component/icon/instagram.svg";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


function contactus() {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const [isPreloading, setIsPreloading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [countryCode, setCountryCode] = useState('+60');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Description, setDescription] = useState('')
  const [FullName, setFullName] = useState('')
  const [WorkMail, setWorkMail] = useState('')
  const [isSuscribeChecked, setIsSuscribeChecked] = useState(false);
    const [success, setSuccess] = useState(false);
  const [isReadChecked, setIsReadChecked] = useState(false);
  const options = [
    { id: "client", label: "Become a client" },
    { id: "team", label: "Join the team" },
    { id: "investor", label: "Investor enquiry" },
    { id: "others", label: "Others" },
  ];
const [errors, setErrors] = useState({
  fullname: '',
  phonenumber: '',
  email: '',
  intention: ''
});
const [formData, setFormData] = useState({
    contactid: '',
    fullname: '',
    phonenumber: '',
    createddt: new Date().toISOString(), 
    description: '',
    email: '',
    intention: ''
  });


  

  const [selectedFrameworks, setSelectedFrameworks] = useState<string>("react");

  const handleCheckboxChange = (selectedValues: string) => {
    setSelectedFrameworks(selectedValues);
  };

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

 const uuid = uuidv4()
 const createdDate = new Date().toISOString()

 const validateForm = (data: typeof formData): boolean => {
  const newErrors = {
    fullname: '',
    phonenumber: '',
    email: '',
    intention: ''
  };
  let isValid = true;

  // Full name validation
  if (!data.fullname || data.fullname.trim() === '') {
    newErrors.fullname = 'Name is required';
    isValid = false;
  }

  // Phone number validation (basic format)
  const phoneRegex = /^\+?[0-9]{8,15}$/;
  if (!data.phonenumber || !phoneRegex.test(data.phonenumber)) {
    newErrors.phonenumber = 'Valid phone number is required (e.g., +60123456789)';
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    newErrors.email = 'Valid email is required';
    isValid = false;
  }

  // Intention validation
  if (!data.intention || data.intention.trim() === '') {
    newErrors.intention = 'Intention is required';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};

const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
    const formData ={
      contactid: uuid,
    fullname: FullName,
     description: Description,
      createddt: createdDate,
    phonenumber: `${countryCode}${phoneNumber}`,
    email: WorkMail,
    intention: selectedFrameworks,
    }

    console.log(formData,'tengok sikit')
   
    if (!validateForm(formData)) {
    console.log('Validation failed');
    return;
  }

    try {
      const res = await axios.post('/api/data', formData );
      console.log('Submitted Successfully:', res.data);
      setSuccess(true);
        setFullName('');
    setPhoneNumber('');
    setDescription('');
    setWorkMail('');
    setSelectedFrameworks('');
    } catch (err: any) {
      console.error('Error:', err.message);
    }
  };

  return (
    <>
    {isDesktop ? ( 
      <main className="gradient-bg">
        <NavBar />

        <h1 style={{ textAlign: "left", fontSize: "5rem" }}>CONTACT US</h1>
        <h1 style={{ textAlign: "left", fontSize: "2rem" }}>
          Let's create something awesome together
        </h1>

 <form onSubmit={handleSubmit}>
<div style={{ textAlign: "left" }}>
          <span >Full name</span>
          <TextField 
          value={FullName}
          onChange={e => setFullName(e.target.value)}
          />
          {errors.fullname && <span style={{ color: 'red' }}>{errors.fullname}</span>}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            textAlign: "left",
          }}
        >
          <div style={{ flex: "1 1 45%" }}>
            <span>Phone number</span>
           <PhoneInput
             selectedCountryCode={countryCode}
             phoneNumber={phoneNumber}
             onCountryCodeChange={setCountryCode}
             onPhoneNumberChange={setPhoneNumber}
             placeholder="Enter phone number" />
             {errors.phonenumber && <span style={{ color: 'red',marginTop:'2rem' }}>{errors.phonenumber}</span>}
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <span>Work Email</span>
            <TextField 
          value={WorkMail}
          onChange={e => setWorkMail(e.target.value)}/>
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <span>I want to</span>
          <CircularCheckbox
            options={options}
            selectedValues={selectedFrameworks}
            onChange={handleCheckboxChange}
          />
        </div>

        <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <span style={{display:'block'}}>Tell us more</span>
          <TextField 
          placeholder="Briefly describe your message here"
          label='Description'
          value={Description}
          onChange={e => setDescription(e.target.value)}
          style={{width:'1035px',height:'300px',alignContent:'flex-start'
          }}/>
        
        </div>

        <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
         <Checkbox1 label='I want to suscribe to the occasional insightful material from GrowthOps. (optional)'
         checked={isSuscribeChecked}
         onChange={setIsSuscribeChecked}
         id="Suscribe"
         />
         
        </div>
        <div style={{  display: 'flex',
  alignItems: 'center', 
  textAlign: 'left',
  marginTop: '1.5rem' }}>
         <Checkbox1 
         id="Read"
         checked={isReadChecked}
         onChange={setIsReadChecked}
         />
         <span style={{marginLeft:'0.5rem', fontSize:'14px', alignItems:'center'}}> I have read and agree to the website's{' '}
      <span  style={{ textDecoration: 'underline', }}>privacy and policy</span></span>
        </div>
        <div style={{display:'flex', alignContent:'flex-start', marginTop:'3rem'}}>
        <PillButton 
            style={{backgroundColor:'#33FF85'}}
            label='Submit'
            onClick={ () => {
             handleSubmit
            }}
            />
        </div>
 </form>
        
        <div className="card">
          <h1  style={{ fontSize: "5rem" }}>
            OUR OFFICES
          </h1>
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
            alignItems: "center",
            width: "30%",
          }}>
            <div>
            <ContactCards
        region="ASIA"
        city="Kuala Lumpur"
        phone="+60 3 2789 9038"
        email="my@growthops.asia"
        address="Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia"
      />
            </div>
            <div>
            <ContactCards
        region="ASIA"
        city="Singapore"
        phone="+65 6220 8383"
        email="sg@growthops.asia"
        address="1 Neil Rd,#02-02, Singapore, 088804"
      />
       
            </div>
          
          </div>
          <div 
           style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
          }}>
    <div>
    <ContactCards
        region="ASIA"
        city="Manila"
        phone="+63 2 7586 4771"
        email="man@growthops.asia"
        address="KMC Solutions, 5F V Corporate Center, L.P. Leviste, Salcedo Village, Makati City 1227"
      />
        
            </div>
            <div>
            <ContactCards
        region="MIDDLE EAST"
        city="United Arab Emirates"
        address="Building 1, Unit B304, Dubai, Design District"
      />
            </div>
         
          </div>
          <div
           style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
          }}>
    <div>
    
          <ContactCards
        region="ASIA"
        city="Hong Kong"
        phone="+852 2805 9009"
        email="hkg@growthops.asia"
        address="29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong"
      />
            </div>
          
          </div>
          </div>
        <div className="card">
          <h1 style={{ fontSize: "5rem" }}>KEEP IN TOUCH</h1>
        </div>
       

        <Footer />
      </main>) : ( <main className="gradient-bg">
        <NavBar />

        <h1 style={{ textAlign: "left", fontSize: "48" }}>CONTACT US</h1>
        <h1 style={{ textAlign: "left", fontSize: "20px" }}>
          Let's create something awesome together
        </h1>
 <form onSubmit={handleSubmit}>
  <div style={{ textAlign: "left" }}>
          <span style={{fontSize:'14px'}}>Full name</span>
          <TextField 
          value={FullName}
          onChange={e => setFullName(e.target.value)}
          />
          {errors.fullname && <span style={{ color: 'red' }}>{errors.fullname}</span>}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            textAlign: "left",
          }}
        >
          <div style={{ flex: "1 1 45%" }}>
            <span>Phone number</span>
           <PhoneInput
             selectedCountryCode={countryCode}
             phoneNumber={phoneNumber}
             onCountryCodeChange={setCountryCode}
             onPhoneNumberChange={setPhoneNumber}
             placeholder="Enter phone number" />
               {errors.phonenumber && <span style={{ color: 'red',marginTop:'2rem' }}>{errors.phonenumber}</span>}
          </div>
          
        </div>
        <div style={{ flex: "1 1 45%",  textAlign: "left",marginTop:'1.5rem' }}>
            <span style={{fontSize:'14px'}}>Work Email</span>
            <TextField 
          value={WorkMail}
          onChange={e => setWorkMail(e.target.value)}/>
             {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
        <div style={{ textAlign: "left" }}>
          <span>I want to</span>
          <CircularCheckbox
            options={options}
            selectedValues={selectedFrameworks}
            onChange={handleCheckboxChange}
          />
        </div>

        <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <span>Tell us more</span>
          <TextField 
          placeholder="Briefly describe your message here"
          label='Description'
          value={Description}
          onChange={e => setDescription(e.target.value)}
          style={{width:'100%',height:'100px',alignContent:'flex-start'
          }}/>
     
        </div>

        <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
         <Checkbox1 label='I want to suscribe to the occasional insightful material from GrowthOps. (optional)'
         checked={isSuscribeChecked}
         onChange={setIsSuscribeChecked}
         id="Suscribe"
         />
         
        </div>
        <div style={{  display: 'flex',
 
  textAlign: 'left',
  marginTop: '1.5rem' }}>
         <Checkbox1 
         id="Read"
         checked={isReadChecked}
         onChange={setIsReadChecked}
         />
         <span style={{marginLeft:'0.5rem', fontSize:'14px', alignItems:'center'}}> I have read and agree to the website's{' '}
      <span  style={{ textDecoration: 'underline', }}>privacy and policy</span></span>
        </div>
        <div style={{display:'flex', justifyContent:'center', marginTop:'3rem'}}>
        <PillButton 
            style={{backgroundColor:'#33FF85'}}
            label='Submit'
            onClick={ () => {
             handleSubmit
            }}
            />
        </div>
 </form>
        
        <div className="card" style={{marginTop:'5rem'}}>
          <span  style={{ fontSize: "35px",fontWeight:'bold' }}>
            OUR OFFICES
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          
            <div>
            <ContactCards
        region="ASIA"
        city="Kuala Lumpur"
        phone="+60 3 2789 9038"
        email="my@growthops.asia"
        address="Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia"
      />
            </div>
            <div>
                <ContactCards
        region="ASIA"
        city="Hong Kong"
        phone="+852 2805 9009"
        email="hkg@growthops.asia"
        address="29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong"
      />
           
            </div>
          
          </div>
          <div 
           style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center"
          }}>
    <div
    
     style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}>
             <ContactCards
        region="ASIA"
        city="Singapore"
        phone="+65 6220 8383"
        email="sg@growthops.asia"
        address="1 Neil Rd,#02-02, Singapore, 088804"
      />
       
   
        
            </div>
            <div
            
            style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}>
        <ContactCards
        region="ASIA"
        city="Hong Kong"
        phone="+852 2805 9009"
        email="hkg@growthops.asia"
        address="29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong"
      />
            </div>
         
        
          <div
           style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center"
          }}>
    <div>
    
        
            <ContactCards
        region="MIDDLE EAST"
        city="United Arab Emirates"
        address="Building 1, Unit B304, Dubai, Design District"
      />
            </div>
          
          </div>
          </div>
        <div className="card">
          <span style={{ fontSize: "35px", fontWeight:'bold' }}>KEEP IN TOUCH</span>
        </div>
       

         <img src={Footerbg} alt="Mockup" style={{ width: "100%" }} />
         <div style={{display:'flex',flexDirection:'column',justifyContent: "space-between",textAlign:'left',gap:'1rem'}}>
          <span style={{display:'block',fontWeight:'14px',color:'#666666'}}>
            ASIA
          </span>
          <span style={{display:'block',fontWeight:'14px'}}>
            Hong Kong
          </span>
          <span style={{display:'block',fontWeight:'14px'}}>
            Kuala Lumpur
          </span>
          <span style={{display:'block',fontWeight:'14px'}}>
            Manila
          </span>
          <span style={{display:'block',fontWeight:'14px'}}>
            Singapore
          </span>
          <span style={{display:'block',fontWeight:'14px',color:'#666666'}}>
            MIDDLE EAST
          </span>
          <span style={{display:'block',fontWeight:'14px'}}>
            United Arab Emirates
          </span>
         </div>
         
        
          <div style={{gap:'5rem',display:'flex',flexDirection:'row',justifyContent:'center' ,marginTop:'4rem'}}>
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
       
      </main>)}
     
    </>
  );
}

export default contactus;
