import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
              <img className="profileUserImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Gu4JoL99rycFI3roa3z7yKe3xSvfYL12Drpud14oDCLiORPwGlS_OZApJdS0q-NVhKc&usqp=CAU" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Peter Drury</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
