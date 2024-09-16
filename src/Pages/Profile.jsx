import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Profile = () => {
  return (
    // <div className='profile'>
    //     <div className='top-profile'>
    //       <div className="profile-edit">
    //         <h1 id='my-profile'>My Profile</h1>
    //         </div>
    //         <button className='save-btn'>Save  <FaArrowRightLong /></button>
    //     </div>

    //     <div className='details'>
    //         <div className='main-details'>
    //             {/* <div className='user-image'>User Image</div> */}
    //         </div>
    //         <div className='general-details'></div>
    //     </div>
    // </div>

    <div className='user-profile'>
      <div className='top-profile'>
        <div edit-profile-text> <h1 className='my-profile'>My Profile &gt;</h1> <h1 className='edit-profile'> Edit Profile</h1></div>
          <button className='save-btn'>Save  <FaArrowRightLong /></button>
      </div>
      <div className='bottom-profile'>
        <div className='left-profile'>
          <div className="user-image">
            <img src="" alt="" />
          </div>
          <form action="">
            <div className="name">
              <div className="fname">
                <label htmlFor="f-name">First Name</label>
                <input type="text" id='l-name'/>
              </div>
              <div className="lname">
                <label htmlFor="f-name">Last Name</label>
                <input type="text" id='l-name'/>
              </div>
            </div>
            <div className="password">
              <label htmlFor="passwd">Password</label>
              <input type="passwd" id='password'/>
            </div>
            <div className="contact">
            <div className="email">
              <label htmlFor="e-mail">Eamil</label>
              <input type="email" id='e-mail' />
            </div>
            <div className="phone-no">
              <label htmlFor="phone">Phone</label>
              <input type="text" id='phone' />
            </div>
            </div>
            
            <div className="address">
              <label htmlFor="address">Address</label>
              <input type="text" id='address' />
            </div>
            <div className="region">

              <div className="pincode">
                <label htmlFor="pin">Pincode</label>
                <input type="text" id='pin'/>
              </div>
              <div className="city">
                <label htmlFor="city">City</label>
                <input type="text" id='l-name'/>
              </div>
          </div>
          </form>
        </div>


        <div className='right-profile'>
          
          
          <div className='gender'>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="male" name="gender" >Male</option>
              <option value="female" name="gander">Female</option>
            </select>
          </div>
          
        </div>
      </div>
    </div>
    




  )
}

export default Profile