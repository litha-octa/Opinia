import React, {useState} from "react";
import './style.css';
import {
  Home,
  LogoOpinia,
  Chat,
  Grup,
  Notif,
  ProfilePic,
  Search,
  BackgroundImg,
  Medal,
  LeftArrow,
  SemuaOn,
  IdeOff,
  IdeOn,
  PollingOff,
  ArtikelOff,
  PetisiOff,
  BgPost,
  PostProfile,
} from "../../assets";
import { Rating } from "react-simple-star-rating";
function Body(){
    const [rating, setRating] = useState();
    return (
      <div className="bbody">
        <nav>
          <img src={LogoOpinia} className="logoNav" alt="Icon Navbar" />
          <div className="searchbarContain">
            <input type="text" className="searchbar" />
            <img src={Search} className="searchIcon " alt="Icon Navbar" />
          </div>
          <div className="iconContainer">
            <img src={Home} className="iconNav " alt="Icon Navbar" />
            <img src={Grup} className="iconNav  " alt="Icon Navbar" />
            <img src={Chat} className="iconNav  " alt="Icon Navbar" />
            <img src={Notif} className="iconNav  " alt="Icon Navbar" />
            <img src={ProfilePic} className="iconNav " alt="Icon Navbar" />
          </div>
        </nav>
        <div className="mainProfile">
          <div>
            <img src={BackgroundImg} alt="CoverImage" className="coverPic" />
          </div>
          <div className="profileInfo">
            <div className="username">Ryudan Sesa</div>
            <div className="rate">
              <Rating
                onClick={setRating}
                ratingValue={rating}
                size={30}
                transition={true}
                fillColor="yellow"
              />
            </div>
            <div className="btn">Edit Profil</div>
          </div>
        </div>
        <div className="container">
          <div className="leftContainer">
            <div className="poin">
              <img src={Medal} alt="Medal Icon" />
              <div>Total Poin Anda </div>
              <img src={LeftArrow} alt="left arrow" />
            </div>
            <div className="completeRate">
              Melengkapi profil membantu kami memvalidasi akun Anda, dan
              memudahkan Opinian lainnya memahami Anda
            </div>
            <div className="menu">
              <button className="menuItem">
                <img src={SemuaOn} className="iconMenuItem" />
                Semua
              </button>
              <button className="menuItem">
                <img src={IdeOff} className="iconMenuItem" />
                {/* {onClick?<img src={IdeOn}/> : <img src={IdeOff} />} */}
                Idea
              </button>
              <button className="menuItem">
                <img src={ArtikelOff} className="iconMenuItem" />
                Artikel
              </button>
              <button className="menuItem">
                <img src={PollingOff} className="iconMenuItem" />
                Poling
              </button>
              <button className="menuItem">
                <img src={PetisiOff} className="iconMenuItem" />
                Petisi
              </button>
            </div>
          </div>
          <div className="rightContainer">
            <div className="post">
              <div className="headerPost">
                <div>
                  <img src={PostProfile} alt="profile" />
                </div>
                <div>username and time</div>
                <div>tripelDot</div>
              </div>
              <div>
                <img src={BgPost} />
              </div>
            </div>
            {/* <div className="post">
              <div className="headerPost">
                <div>
                  <img src={PostProfile} alt="profile" />
                </div>
                <div>username and time</div>
                <div>tripelDot</div>
              </div>
              <div>
                <img src={BgPost} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
}
export default Body;