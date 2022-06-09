import React, { useState } from "react";
import "./style.css";
import useCollapse from "react-collapsed";
import {
  Home,
  LogoOpinia,
  Chat,
  Grup,
  Notif,
  ProfilePic,
  Search,
  BackgroundImg,
  CreatePost,
  Medal,
  LeftArrow,
  SemuaOn,
  Share,
  IdeOff,
  IdeOn,
  PollingOff,
  ArtikelOff,
  TripleDot,
  PetisiOff,
  BgPost,
  Send,
  PostProfile,
  Forward,
  Fun,
  See,
  Comment,
  Inspiring,
} from "../../assets";
import { Rating } from "react-simple-star-rating";
import ProgressBar from "react-bootstrap/ProgressBar";
import Progress from"react-progressbar";

function Body() {
  const [rating, setRating] = useState();
  const progressValue = 75;
  const descPost =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...";
  const descPostCut = descPost.substring(0, 150);
  const btnSeeMore = <button onClick={descPost}>...selengkapnya</button>;
  const caption = "Belajar Menjadi Manusia";

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
        <div className="follower">
          <div className="disabledText">
            Postingan
            <div className="blackText">20</div>
          </div>
          <div className="disabledText">
            Mengikuti
            <div className="blackText">5</div>
          </div>
          <div className="disabledText">
            Pengikut
            <div className="blackText">5</div>
          </div>
        </div>
        <div className="profileInfo">
          <div className="imageProfile">
            <img src={ProfilePic} className="imageProfile" />
          </div>
          <div className="username">Ryudan Sesa</div>
          <div className="rate">
            <Rating
              onClick={setRating}
              ratingValue={rating}
              size={20}
              transition={true}
              fillColor="yellow"
            />
          </div>
          <div className="btnEdit">Edit Profil</div>
          <div className="descProfile">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the..
          </div>
        </div>
      </div>
      <div className="container">
        <div className="leftContainer">
          <div className="poin">
            <img src={Medal} alt="Medal Icon" className="medalIcon" />
            <div className="poinText">
              <div className="total">Total Poin Anda </div>
              <div className="jumlahPoin">17.4 Klaim Hadiah</div>
            </div>

            <img src={LeftArrow} alt="left arrow" className="leftArrow" />
          </div>
          <div className="completeRate">
            <div className="RateText">
              Melengkapi profil membantu kami memvalidasi akun Anda, dan
              memudahkan Opinian lainnya memahami Anda
              <div className="disabledText">Melengkapi Profil Anda 5/8</div>
              <div>
                <Progress
                  completed={80}
                  className="ProgressBar"
                  color="#EA6C00"
                />
              </div>
            </div>
            <div className="btnCreate">
              <img src={CreatePost} className="emotCreate" />
              <div className="textCreate">Buat Postingan</div>
            </div>
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
              <div className="picPoster">
                <img src={PostProfile} alt="profile" />
              </div>
              <div className="namePoster">Ryudan Sesa</div>
              <div className="tripleDot">
                <img src={TripleDot} />
              </div>
            </div>
            <div className="caption">{caption}</div>
            <div>
              <img src={BgPost} className="bgPost" />
            </div>
            <div className="caption">
              {descPost <= 120 ? descPost : descPostCut}
            </div>
            <div className="emotPost">
              <div className="emotPostItem">
                <img src={Inspiring} alt="emotPost" className="emotPostItem" />
                <div className="viewers">32</div>
              </div>
              <div className="emotPostItem">
                <img src={Fun} alt="emotPost" className="emotPostItem" />
                <div className="viewers">23</div>
              </div>
              <div className="emotPostItem">
                <img src={Comment} alt="emotPost" className="emotPostItem" />
                <div className="viewers">15</div>
              </div>
              <div className="emotPostItem">
                <img src={See} alt="emotPost" className="emotPostItem" />
                <div className="viewers">2</div>
              </div>
              <div className="emotPostItem">
                <img src={Forward} alt="emotPost" className="emotPostItem" />
                <div className="viewers">12</div>
              </div>
              <div className="emotPostItemRight">
                <img src={Share} alt="emotPost" className="emotPostItem" />
              </div>
            </div>
            <div className="inputComment">
              <div>
                <img src={ProfilePic} className="miniProfile" />
              </div>
              <div>
                <input
                  text
                  placeholder="Tulis Komentar"
                  className="inputTextComment"
                />
              </div>
              <button className="sendIcon">
                <img src={Send} />
              </button>
            </div>
          </div>
          <div className="post">
            <div className="headerPost">
              <div className="picPoster">
                <img src={PostProfile} alt="profile" />
              </div>
              <div className="namePoster">Ryudan Sesa</div>
              <div className="tripleDot">
                <img src={TripleDot} />
              </div>
            </div>
            <div className="caption">{caption}</div>
            <div>
              <img src={BgPost} className="bgPost" />
            </div>
            <div className="caption">
              {descPost <= 120 ? descPost : descPostCut}
            </div>
            <div className="emotPost">
              <div className="emotPostItem">
                <img src={Inspiring} alt="emotPost" className="emotPostItem" />
                <div className="viewers">32</div>
              </div>
              <div className="emotPostItem">
                <img src={Fun} alt="emotPost" className="emotPostItem" />
                <div className="viewers">23</div>
              </div>
              <div className="emotPostItem">
                <img src={Comment} alt="emotPost" className="emotPostItem" />
                <div className="viewers">15</div>
              </div>
              <div className="emotPostItem">
                <img src={See} alt="emotPost" className="emotPostItem" />
                <div className="viewers">2</div>
              </div>
              <div className="emotPostItem">
                <img src={Forward} alt="emotPost" className="emotPostItem" />
                <div className="viewers">12</div>
              </div>
              <div className="emotPostItemRight">
                <img src={Share} alt="emotPost" className="emotPostItem" />
              </div>
            </div>
            <div className="inputComment">
              <div>
                <img src={ProfilePic} className="miniProfile" />
              </div>
              <div>
                <input
                  text
                  placeholder="Tulis Komentar"
                  className="inputTextComment"
                />
              </div>
              <button className="sendIcon">
                <img src={Send} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
