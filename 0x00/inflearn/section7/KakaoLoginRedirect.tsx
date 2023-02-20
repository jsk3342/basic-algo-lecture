import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

function KakaoLoginRedirect() {
  const params = useParams();

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("token", params.token);
    window.location.replace("/nickname");
  }, []);

  return <></>;
}

export default KakaoLoginRedirect;