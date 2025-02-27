import React, { useEffect, useState } from "react";

const useOnlineState = () => {
  const [onLineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onLineStatus;
};

export default useOnlineState;
