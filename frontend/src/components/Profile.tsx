import React, { useContext, useEffect, useState } from "react";
import { userAccountCtx } from "../context/userAccount";

import { Account } from "../typechain-types";
import { GENDER, LOCATION } from "../constants/enums";
import { AccountInfoStructOutput } from "../typechain-types/Account";
const Profile = () => {
  const userAccount = useContext(userAccountCtx);

  const [userInfo, setUserInfo] =
    useState<null | AccountInfoStructOutput>(null);

  useEffect(() => {
    userAccount.getSelfInfo().then((d) => setUserInfo(d));
  }, [userAccount]);

  return userInfo == null ? (
    <span className="loading loading-infinity loading-sm"></span>
  ) : (
    <div className="absolute top-2 right-4">
      <div className="dropdown dropdown-end ">
        {/* <span className="badge badge-sm indicator-item">8</span>/ */}
        <button tabIndex={0} className=" avatar placeholder">
          <div className="bg-primary-focus text-base-content rounded-full p-2">
            <span className="text-lg">
              {userInfo.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </span>
          </div>
        </button>

        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
              <h2 className="text-lg text-left">{userInfo.name}</h2>
              <span className="text-xs">{userInfo.user_id.slice(0,8)+"..."+userInfo.user_id.slice(-10)}</span>
            <div className="flex justify-between">
              <span className="text-info">
                {Number(userInfo.age)}, {GENDER[userInfo.genderID]}{" "}
              </span>
              <div className="divider divider-horizontal "></div>
              <span className="">{LOCATION[Number(userInfo.locationID)]}</span>
            </div>
            <p>{userInfo.bio}</p>

            <div className="card-actions">
              {/* <button  className="btn btn-primary btn-block">Logout</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
