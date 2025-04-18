import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Logo } from "../icons/Logo";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Brain } from "../icons/Brain";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });
      alert("You have signed up!");
      navigate("/signin");
    } catch (error) {
      console.error("Signup error:", error);
      alert("username must be at least 3 characters long and password must be at least 8 characters long. please try again.");
    }
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
          onClick={signup}
          loading={false}
          variant="primary"
          text="Signup"
          fullWidth={true}
        />
      </div>
    </div>
  </div>

  );
}
