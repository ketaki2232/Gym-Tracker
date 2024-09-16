import React from "react";

const Signup = () => {
    
  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="btn">
            <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
