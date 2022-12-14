import {useEffect, useRef, useState} from "react";
import Input from "./components/Input";
import {AiFillFacebook} from "react-icons/ai";

function App() {
    const ref = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const enable = username && password
    useEffect(() =>{
        let images = ref.current.querySelectorAll('img'),
            total =images.length,
            current = 0
        const heroSlider = () =>{
                if(current > 0 ){
                    images[current-1].classList.add('opacity-0')
                }
                else
                {
                    images[total-1].classList.add('opacity-0')
                }
                images[current].classList.remove('opacity-0')
                if(current === total - 1){
                    current = 0;
                }
                else
                {

                    current +=1
                }

        }
        heroSlider()
        let interval = setInterval(heroSlider,3000);
        return () => {
            clearInterval(interval)
        }
    }, [ref]);
  return (
   <div className="h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center">
     <div className="hidden md:block w-[380px] h-[581px] bg-hero-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]" >
     <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
         <img className="h-full w-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" />
         <img className="h-full w-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" />
         <img className="h-full w-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" />
         <img className="h-full w-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" />
     </div>
     </div>
   <div className={"w-[350px] grid gap-y-3"}>
       <div className={"bg-white border p-[40px] pt-10 pb-6"}>
           <a href={"#"} className={"flex justify-center mb-8"}>
               <img className={"h-[51px] "} src={"https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"}/>
           </a>
           <form className={"grid gap-y-1.5"}>
               <Input type={"text"} value={username} onChange={e => setUsername(e.target.value)} label={"Telefon numaras??, kullan??c?? ad?? veya e-posta"} />
               <Input type={"password"} value={password} onChange={e => setPassword(e.target.value)}  label={"??ifre"} />
               <button type={"submit"} disabled={!enable} className={"h-[30px] mt-1 rounded bg-instagram-button font-medium text-white text-sm disabled:opacity-50"}>Giri?? Yap</button>
               <div className={"flex items-center my-2.5 mb-3.5"}>
                   <div className={"h-px bg-gray-300 flex-1"}/>
                   <span className={"px-4 text-[13px] text-gray-500 font-semibold"}>YA DA</span>
                   <div className={"h-px bg-gray-300 flex-1"}/>
               </div>
               <a href={"#"} className={"flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook"}>
                   <AiFillFacebook  size={20}/>
                   Facebook ile Giri?? Yap
               </a>
               <a href={"#"} className={"flex justify-center items-center text-sm text-link"}>
                   ??ifreni mi unuttun?
               </a>
           </form>
       </div>
       <div className={"bg-white border p-4 text-sm text-center"}>
           Hesab??n yok mu? <a href={"#"} className={"font-semibold text-instagram-button"}>Kaydol</a>
       </div>
   </div>
   </div>
  );
}

export default App;
