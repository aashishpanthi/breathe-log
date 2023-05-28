import React from "react";
import { useAuthenticationStatus } from "@nhost/react";

function Profile() {
  const { isAuthenticated } = useAuthenticationStatus();

  if (!isAuthenticated) {
    return <div className="max-w-screen-xl mx-auto p-4">Not logged in</div>;
  }

  return <div className="max-w-screen-xl mx-auto p-4">Profile</div>;
}

export default Profile;
