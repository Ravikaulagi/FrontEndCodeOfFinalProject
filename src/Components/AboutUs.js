import React from 'react'
import "./AboutUs.css"

import AuthService from "../Services/auth-service";

const AboutUs = () => {
    const currentUser = AuthService.getCurrentUser();
  
    return (
        <div >
     <img id='five4' src="https://www.codewithc.com/wp-content/uploads/2014/07/telephone-directory.png" width="1216px"height="550px"></img>
     <div id="seven4">
     <div id='one3'>
      AboutUs
     </div>
     <div id='two3'>
     Just dial in Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS).
     Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also recently launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it has also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.
    </div>
    <div id='three3'>
      Contact Us
      </div><br/>
      <div id='four4'>
      <img id='six4' src='https://cdn-icons-png.flaticon.com/512/455/455705.png' width="40px" height="40px"></img><br/>
      By Phone <br/>
    (Monday-firday 9am to 6pm)<br/>
     7829285006
     </div>
     </div>
    </div>
    );
  };
  export default AboutUs;