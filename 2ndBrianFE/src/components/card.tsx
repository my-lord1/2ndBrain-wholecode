
import { ArrowBox } from "../icons/arrowBox"
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
    open?: boolean;
    onClose?: () => void;
    handleDelete?: () => void;
}
export function Card({title, link, type}: CardProps) {

    return (<div>
      
        <div className="p-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl border border-purple-300 shadow-md w-72 h-96 flex flex-col justify-between transition-shadow hover:shadow-xl overflow-hidden">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center text-base font-semibold text-black-900 gap-2">
            <div className="text-black-500 pr-2">
              {type === "youtube" && <YoutubeIcon />}
              {type === "twitter" && <TwitterIcon />}
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="text-black-500 pr-2">
              <a href={link} target="_blank">
                <ArrowBox />
              </a>
            </div>

          </div>
        </div>
      
        <div className="pt-4 flex-1 overflow-auto">
          {type === "youtube" && (
            <iframe
              className="w-full h-48"
              src={`https://www.youtube.com/embed/${new URL(link).searchParams.get("v")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
      
          {type === "twitter" && (
            <div className="w-full h-48 overflow-hidden">
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
              <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
          )}
        </div>
        </div>

      </div>)


}


