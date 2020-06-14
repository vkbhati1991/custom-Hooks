import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useGetData }from "../../Hooks/GetData";

function AppHeader() {

    const [userProfile, setUserProfile] = useState({});
    const [showProfile, toggleProfile] = useState(false);
    const { data } = useGetData("/api/users/GetUserByEmail");

    useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
            setUserProfile(data);
            console.log("header", data);
        }
     
        return () => isCancelled = true;
    }, [data]);

    function getUserProfile() {

        if (!userProfile) {
            return;
        }

        const { firstName, lastName } = userProfile;

        return (
            <div className="user-profile-dropdown absolute bg-white pa-16 ba b--moon-gray">
                <div className="user-profile-header flex">
                    <div className="user-profile-img ht60 wt60 br-pill overflow-hidden"><img alt="" src="assets/images/businessman.png" /></div>
                    <div className="user-profile-content ph-16">
                        <div className="user-profile-content-row">
                            <div className="profile-content-row--value ff-bold primary ">
                                {`${firstName} ${lastName}`}
                        </div>
                        </div>
                        <div className="user-profile-content-row pv-8">
                            <div className="profile-content-row--value">{userProfile.userName}</div>
                        </div>
                        <div className="user-profile-content-row">
                            <div className="profile-content-row--value">{userProfile.role}</div>
                        </div>
                    </div>
                </div>
                <div className="header-logout bt b--moon-gray mt-16 pt-16">
                    <NavLink className="logout-icon pointer red db" to="/Logout"> Logout</NavLink>
                </div>
            </div>
        );
    }


    return (
        <div className="app-header flex items-center bb b--light-gray bg-white">
            <div className="app-logo">
                <img alt="" src="assets/images/vlogo1.svg" />
            </div>
            <div className="app-search flex-1"></div>
            <div className="app-notification relative">
                <span className="notif-icon primary f24 pointer db">
                    <i className="fa fa-bell-o"></i>
                </span>
            </div>
            <div className="app-profile relative flex items-center ph-16">
                <div onClick={()=>{toggleProfile(!showProfile);}} className="app-profile-image ht32 wt32 min-wt32 overflow-hidden br-pill">
                    <img alt="" src="assets/images/businessman.png" />
                </div>
                {showProfile && getUserProfile()}
            </div>
        </div>
    );
}

export { AppHeader };