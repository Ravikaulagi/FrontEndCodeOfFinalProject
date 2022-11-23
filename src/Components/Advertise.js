import React from 'react';
import './Advertise.css';
import UserService from "../Services/user-service";

const Advertise = () => {
  
  
    return (
      <div className='one2'>
      .
      <div className='three2'>
      <h4 className='two2'> Get the TOP POSITION ,place your AD with Our Company</h4>
      <span id='four2'> Enter your details below <br/><br/>
      <div id='five2'>
      <input type="text" placeholder='Company Name'></input>
      </div>
      <div id='nine2'>
      <input type="text" placeholder='City'></input>
      </div><br/><br/>
         <div id='six2'>
         <div class="col-auto">
         <label class="visually-hidden" for="autoSizingSelect">Preference</label>
          <select class="form-select" id="autoSizingSelect">
      <option selected>title</option>
      <option value="1">Mr.</option>
      <option value="2">Mrs.</option>
      
    </select>
    </div>
          </div>
          <div id='seven2'>
           <input id="tweleve2" type="text" placeholder='FirstName'></input>
           <input id="eight2" type="text" placeholder='LastName'></input><br/><br/>
           <input id="ten2"type="text" placeholder='Mobile No'></input><br/><br/>
          </div>
          <div id="eleven2">
            <input type="text" placeholder='LandLineNumber'></input>
          </div>
         <button id="thirteen2">Submit</button>
        </span> 

</div>
</div>
    );
  };
  export default Advertise;