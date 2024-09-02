import React from "react";
//import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    
      <div className="flex items-center gap-3">
       

        <div>
          <p className="text-sm font-medium">{userInfo?.fullName}</p>
          <button className="text-sm text-slate-700 underline" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    
  );
};

export default ProfileInfo;
