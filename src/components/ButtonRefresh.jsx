import React,{useState} from "react";

const ButtonRefresh = () => {

    const [BtnRef, setBtnRef] = useState(false);

    const RefreshToTop = () => {
      if (window.scrollY >= 150) {
        setBtnRef(true);
      } else {
        setBtnRef(false);
      }
    }
  
    window.addEventListener('scroll', RefreshToTop)
  

    return (
        <div className={BtnRef ? "fixed bottom-2 transition duration-300 ease-in-out right-2" : " transition duration-300 ease-in-out opacity-0"}>
            <div className="w-10 h-10 bg-sky-500 relative rounded-full">
                <div className="w-4 h-4 absolute bottom-2 right-[12px] rotate-45 border-t-2 border-l-2 border-slate-900"></div>
            </div>
        </div>
    )
}

export default ButtonRefresh;