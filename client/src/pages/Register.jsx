import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Register = () => {

  // const loginWithGoogle = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     console.log(tokenResponse)
  //     const res = await axios.post("http://localhost:4000/api/auth/google", {
  //       accessToken: tokenResponse.access_token
  //     }, { withCredentials: true }
  //     );
  //     console.log(tokenResponse)
  //     console.log(res, "res")
  //   },
  //   onError: () => { console.log("Google Login Failed"); }
  // });

  const handleSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    await axios.post("http://localhost:4000/api/auth/google", {
      idToken: credentialResponse.credential
    }, { withCredentials: true });
  };

  return (
    <div className='h-screen bg-black w-full text-white flex justify-center items-center'>

      <form className="">
        <div className=" flex flex-col gap-4">
          <input className="border rounded-md px-4 py-1" type="text" placeholder="Enter Your FullName" />
          <input className="border rounded-md px-4 py-1" type="text" placeholder="Enter Your UserName" />
          <input className="border rounded-md px-4 py-1" type="email" placeholder="Enter Your Email" />
          <input className="border rounded-md px-4 py-1" type="password" placeholder="Enter Your Password" />

          <h1 className="text-center my-4">or</h1>

          <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
        </div>
      </form>
      {/* <button onClick={loginWithGoogle} className="bg-rose-400 rounded-md px-4 py-1 m-16 cursor-pointer">Login With Google</button> */}

    </div>
  )
}

export default Register