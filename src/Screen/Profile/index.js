import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
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
import Poin from '../Component/Poin';
import "./style.css";

function  Profile(){
    const [rating, setRating] = useState();
    return (
      <div>
        {/* NAVBAR */}
        <nav className="navbar">
          <img src={LogoOpinia} className="logoNav" alt="Icon Navbar" />
          <div className="searchbarContain">
            <input type="text" className="searchbar" />
            <img src={Search} className="searchIcon " alt="Icon Navbar" />
          </div>
          <img src={Home} className="iconNav " alt="Icon Navbar" />
          <img src={Grup} className="iconNav  " alt="Icon Navbar" />
          <img src={Chat} className="iconNav  " alt="Icon Navbar" />
          <img src={Notif} className="iconNav  " alt="Icon Navbar" />
          <img src={ProfilePic} className="iconNav " alt="Icon Navbar" />
        </nav>
        {/* BODY */}
        <div className="body">
          <div className="cover">
            <img src={BackgroundImg} alt="CoverImage" />
            {/* <div className="follower">
              <div>Postingan Mengikuti Pengikut</div>
              <div>20 5 5</div>
            </div> */}
            <div className="profileInfo">
              <div className="profilePic">
                <img src={ProfilePic} alt="Profil Kucing" />
              </div>
              <div className="username">Ryudan Sesa</div>
              <div className="starRate">
                <Rating
                  onClick={setRating}
                  ratingValue={rating}
                  size={30}
                  transition={true}
                  fillColor="yellow"
                />
              </div>
              <div className="btnEdit">Edit Profil</div>
            </div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the..
            </div>
            <div className="poin">
              <div>emot poin</div>
              <div>
                Total Poin Anda
                <div>14.7</div>
                <div>klaim hadiah</div>
              </div>
             <div>emot left arrow</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;