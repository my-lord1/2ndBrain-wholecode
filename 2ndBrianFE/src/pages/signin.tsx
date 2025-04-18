import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";
import { Brain } from "../icons/Brain";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (usernameRef.current) {
            localStorage.setItem("username", usernameRef.current.value);
        }


        if (!username || !password) {
            alert("Please fill all fields.");
            return;
        }
        try{
        const response = await axios.post<any>(BACKEND_URL + "/api/v1/signin", {
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
      }
      catch (error) {
        console.error("Signin error:", error);
        alert("Invalid username or password.");
      }
    }

    function revertback() {
    navigate("/signup");
    }
    return (
   <div className="relative h-screen w-screen flex justify-center items-center" style={{ backgroundImage: "linear-gradient(180deg, #CDA7D2, #BC82C4, #96529B, #70437F, #3C274E)",}}>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[750px] h-[750px] opacity-80">
              <Brain />
          </div>
        </div>
  
  
      <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 w-full max-w-md space-y-6 transition hover:scale-105 duration-300">
        <div className="flex items-center justify-center gap-2 hover:scale-110 duration-300">
          <Logo />
          <span className="text-3xl font-bold text-gray-800">Second Brain</span>
        </div>
  
      <Input reference={usernameRef} placeholder="Username" />
      <Input reference={passwordRef} placeholder="Password" />
  
        <div className="pt-2">
          <Button
            onClick={signin}
            loading={false}
            variant="primary"
            text="Signin"
            fullWidth={true}>
            </Button>
              <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                  Don't have an account?
                <button onClick= { revertback } className="text-blue-500 hover:text-blue-700 font-semibold">
                  signup
                </button>
              </div>

        </div>
      </div>
    </div>
      );
}
