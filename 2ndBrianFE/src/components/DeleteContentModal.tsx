import {useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Input } from "./Input";

interface DeleteContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function DeleteContentModal({ open, onClose }: DeleteContentModalProps) { 
    const titleRef = useRef<HTMLInputElement>(null);

    async function handleDelete(title: string) {

        try{
          await axios.request<any>({
              url: BACKEND_URL + "/api/v1/content",
              method: "DELETE",
              headers: {
                  "Authorization": localStorage.getItem("token")
              },
              data: {
                  title
              }
          });
          onClose();
          
      } catch (error) {
          console.error("Error deleting content:", error);
          alert("Failed to delete content");
        }
    }
    return <div>
        {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-slate-500 opacity-60" onClick={onClose}/>
                    <div className="relative z-10 bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-xl shadow-lg w-[90%] max-w-md mx-auto">
                        <div className="flex justify-end">
                            <button onClick={onClose} className="text-gray-500 hover:text-black">
                                <CrossIcon />
                            </button>
                        </div>
                    <h2>Please enter the title of the content you want to delete:</h2>
                    <div className="space-y-4">
                        <Input reference={titleRef} placeholder="You can only delete one Title at a time" />
                        
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button onClick={() => {
                            const title = titleRef.current?.value || "";
                            if (title.trim() !== "") {
                            handleDelete(title);
                            } else {
                            alert("Please enter a title");
                            }}}  
                        variant="primary" text="Submit" />
                    </div>
                    </div>
                </div>
        )}
    </div>






      }
