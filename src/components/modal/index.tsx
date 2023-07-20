import React, {useEffect, useState} from 'react';
import {Modal as MuiModal} from '@mui/material'
import {useInfoStore} from "@/store";
import {FaPause, FaPlay, FaTimes} from "react-icons/fa";
import * as process from "process";
import {Element} from "@/interfaces/app.interface";
import ReactPlayer from "react-player";
import {AiFillLike, AiOutlineLike, } from "react-icons/ai";
import {BiPlus, BiVolumeFull, BiVolumeMute} from "react-icons/bi"

const Modal = () => {
    const [muted, setMuted] = useState<boolean>(true);
    const [playing, setPlaying] = useState(true);
    const {modal, setModal, currentMovie} = useInfoStore();
    const base_url:string = process.env.TMDB_API_URL as string;
    const api_key:string = process.env.TMDB_API_KEY as string;
    const [trailer, setTrailer] = useState<string>('');

    const api = `${base_url}/${currentMovie?.media_type === "tv" ? "tv":"movie"}/${currentMovie.id}/videos?api_key=${api_key}&language=en-US`
    const handleClose = ()=> {
        setModal(false);
    }
    useEffect(()=>{
        const fetchVideo =   ()=>{
          fetch(api).then(res=>res.json())
              .then(data=>{
                  if(data?.results){
                      const index = data.results.findIndex((el:Element)=>el.type==="Trailer")
                      setTrailer(data?.results[index]?.key);
                  }
              })
        }
        fetchVideo()
        // eslint-disable-next-line
    },[currentMovie]);
    return (
        <MuiModal open={modal} onClose={handleClose} className={"fixed !top-5 left-0 right-0 z-50 mx-auto w-full max-w-5xl"}>
           <>
              <div className={"flex items-center justify-center absolute p-5 !z-40 w-full"}>
                  <button className="grid place-content-center active:scale-125 transform duration-300 p-2 rounded-md  h-5 w-5 bg-[#181818]" onClick={handleClose}>
                      <FaTimes className={"text-xl"}/>
                  </button>
              </div>
               <div className={"relative pt-[50%]"}>
                   <ReactPlayer
                       url={`https://www.youtube.com/watch?v=${trailer}`} width={"100%"}
                       height={"100%"}
                       playing={playing}
                       muted={muted}
                       onPlay={()=>setPlaying(true)}
                       onPause={()=>setPlaying(false)}
                       style={{position:"absolute",top:0,left:0}}
                   />
                   <div className="absolute space-x-2  bottom-10 px-2 flex w-full items-center justify-between px-18">
                       <div className="flex items-center space-x-2">
                           <button onClick={()=>setPlaying(prev=>!prev)} className="flex items-center  rounded bg-white py-3 px-8 text-md font-bold text-black transition
                           hover:bg-[#6e6e6e]">
                               {
                                   !playing ? <>
                                       <FaPlay/>
                                       Play
                                   </>:<>
                                       <FaPause/>
                                       Pause
                                   </>
                               }
                           </button>
                           <button className={"text-2xl btn text-white"}>
                               <BiPlus/>
                           </button>
                           <button className={"text-2xl btn text-white"} onClick={()=>setMuted(prev=>!prev)}>
                               {
                                   muted ? <BiVolumeMute /> : <BiVolumeFull/>
                               }
                           </button>
                           <button className={"text-2xl btn text-white"}>
                               <AiOutlineLike/>
                               {/*<AiFillLike/>*/}
                           </button>
                       </div>
                   </div>
               </div>
           </>
        </MuiModal>
    );
};

export default Modal;
