import { ReactElement } from "react";

export function SideBarItem({ text, icon}: {
    text: string;
    icon : ReactElement;
}) {
    return (
        <div className= "flex test-purple-300 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration 150">
            <div className = "pr-2">
                {icon}
            </div>   
            <div>
                {text}
            </div>
        </div>
    )
}