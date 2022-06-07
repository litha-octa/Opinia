import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
// import { Link } from "react-router-dom";
import {Home,
    LogoOpinia,
    Chat,
    Grup,
    Notif,
    ProfilePic,
    Search,
    BackgroundImg,
} from "../../assets";

import "./style.css";

function  Profile(){
    const [rating, setRating] = useState();
    return (
      <div>
        <nav className="navbar">
          <img src={LogoOpinia} className="logoNav" alt="Icon Navbar" />
          <div className="searchbarContain">
            <input type="text" className="searchbar" />
            <img src={Search} className="searchIcon " alt="Icon Navbar" />
          </div>

          {/* <div className="iconContain"> */}
          <img src={Home} className="iconNav " alt="Icon Navbar" />
          <img src={Grup} className="iconNav  " alt="Icon Navbar" />
          <img src={Chat} className="iconNav  " alt="Icon Navbar" />
          <img src={Notif} className="iconNav  " alt="Icon Navbar" />
          <img src={ProfilePic} className="iconNav " alt="Icon Navbar" />
          {/* </div> */}
        </nav>
        <div className="body">
          <div className="cover">
            <img src={BackgroundImg} alt="CoverImage" />
            <div className="follower">
              <div>Postingan Mengikuti Pengikut</div>
              <div>20 5 5</div>
            </div>
            <div className="profilePic">
              <img src={ProfilePic} alt="Icon Navbar" />
            </div>
            <div className="username">Ryudan Sesa</div>
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              changeRating={setRating}
              numberOfStars={5}
              name="rating"
            />
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the..
            </div>
            <div className="btnEdit">
                Edit Profile
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;