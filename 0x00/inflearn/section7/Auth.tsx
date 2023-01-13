import axios from 'axios';
import QueryString from 'qs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const KAKAOKEY = process.env.REACT_APP_KAKAOKEY
    const CLIENT_SECRET = process.env.REACT_APP_SECRETKEY
    const REDIRECT_URI  = `http://localhost:3000/auth/kakao/callback`

    const code = new URL(window.location.href).searchParams.get("code");
    const history = useNavigate();
    const getToken = async () => {
      const payload = QueryString.stringify({
        grant_type: "authorization_code",
        client_id: KAKAOKEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET,
      });
      try {
        // access token 가져오기
        const res = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          payload
        );
        
        // Kakao Javascript SDK 초기화
        window.Kakao.init(KAKAOKEY);
        // access token 설정
        window.Kakao.Auth.setAccessToken(res.data.access_token);
        history("/nickname", { replace: true});
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      getToken();
    }, []);
    return null;
  };
  export default Auth;