
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Logo } from "../icons/Logo";
import { Bars3 } from "../icons/Bars3";
import { HeartIcon } from "../icons/heartIcon";


export function Sidebar({ open,setSelectedType }: { open:any, setSelectedType: any }) {
    const [IsSideBarclose, SetIsSidebarclose ] = useState(open);
    const navigate = useNavigate();

    useEffect(() => {
        SetIsSidebarclose(open);
    }, [open]);

    function revertback1(){
        navigate("/signin");
    }
        return(
    <div>
    {IsSideBarclose && (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 px-6 py-8 shadow-sm">
       
       <div className="flex items-center mb-10">
            
            <div>
                <Bars3/>
            </div>
            <div className="flex items-center pl-4 text-purple-600 space-x-2"> 
                <Logo />
            <span className="text-xl font-semibold text-gray-900">
                Second Brain
            </span>
            </div>
        
        </div>
        <div className="flex flex-col gap-4 pl-12">
            <div onClick={() => setSelectedType("all") } className="cursor-pointer">
                <SideBarItem text="All Types" icon={<HeartIcon />} />
            </div>
            <div onClick={() => setSelectedType("youtube") } className="cursor-pointer">
                <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
            </div>
            <div onClick={() => setSelectedType("twitter") } className="cursor-pointer">
                <SideBarItem text="Twitter" icon={<TwitterIcon />} />
            </div>
            
        </div>
        <div className="bottom-0 left-0 right-0 flex items-center justify-center p-4 pr-9  ">
            <button onClick= { revertback1 } className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-800">
                Sign Out
            </button>
        </div>
    </div>)}
    </div>
)}