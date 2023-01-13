  // const navigate = useNavigate();
  
  // const handleLoginClick = () => {
  //   return navigate("/nickname");
  // };

  // const KAKAOKEY = process.env.REACT_APP_KAKAOKEY
  // const REDIRECT_URI  = `http://localhost:3000/auth/kakao/callback`
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAOKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  

  export const getKakaoLogin = async () => {
    const KAKAOKEY = process.env.REACT_APP_KAKAOKEY
    const REDIRECT_URI  = `http://localhost:3000/auth/kakao/callback`
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAOKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    // console.log(Kakao.init(KAKAOKEY))
  
    try {
      const response = await axios.post(
        `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAOKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  };