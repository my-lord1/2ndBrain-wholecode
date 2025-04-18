import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}


interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;     
        if (!title || !link) {
            alert("Please fill all fields.");
            return;
        }
        if (type === ContentType.Youtube && !link.includes("youtube.com") && !link.includes("youtu.be")) {
        alert("Selected type is YouTube, but the link doesn't look like a YouTube URL.");
        return;
        }
        if (type === ContentType.Twitter && !link.includes("twitter.com") && !link.includes("x.com")) {
            alert("Selected type is Twitter, but the link doesn't look like a Twitter/X URL.");
            return;
        }
        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();

    }

    return <div >
        {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-slate-500 opacity-60" onClick={onClose}/>
        <div className="relative z-10 bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-xl shadow-lg w-[90%] max-w-md mx-auto">
            <div className="flex justify-end">
                <button onClick={onClose} className="text-gray-500 hover:text-black">
                    <CrossIcon />
                </button>
            </div>
        <div className="space-y-4">
            <Input reference={titleRef} placeholder="Title" />
            <Input reference={linkRef} placeholder="Link" />
        </div>
        <div className="mt-4">
            <h1 className="text-center font-semibold mb-2">Type</h1>
            <div className="flex justify-center gap-2">
            <Button
                text="Youtube"
                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Youtube)}
            />
            <Button
                text="Twitter"
                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                onClick={() => setType(ContentType.Twitter)}
            />
            </div>
        </div>
        <div className="mt-6 flex justify-center">
            <Button onClick={addContent} variant="primary" text="Submit" />
        </div>
        </div>
    </div>
        )}
    </div>

}