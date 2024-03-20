import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="https://s3.amazonaws.com/media.mediapost.com/dam/cropped/2021/08/06/tvcommercial-coke-600_5kUvJeI.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Manchester</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">England</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://cdn.punchng.com/wp-content/uploads/2017/08/17151012/Zinedine-Zidane.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Zinedine Zidane</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://i2-prod.football.london/incoming/article28242032.ece/ALTERNATES/s615/0_GettyImages-1835058235.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Thierry Henry</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/LS3_1288_%2853332367864%29_%28cropped%29.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Roberto Carlos</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://phantom-marca.unidadeditorial.es/6eea72782e3ce3632c4714aadaa0c676/resize/828/f/jpg/assets/multimedia/imagenes/2021/09/25/16325868345349.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Andres Iniesta</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1125,w_2000,x_0,y_33/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/d/2/d24a3733e709b74f0ed3c60ad2870e52de1a1dc1/3262023-steven-gerrard-ahead-uefa-euro-2024-group.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Stevan Gerrard</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpEX-5AObB4NyMEe3bv5L1EUntSkfuSpEodHAnQQM_TD4I6u7zPhwUkkun6MXu0dUsKw&usqp=CAU"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Paolo Maldini</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
