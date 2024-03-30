import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  let [Expandlocation,SetExpandLocation]=useState(false)
  let [ExpandLinks,SetExpandLinks]=useState(false)
  let [ExpandNewsLetter,SetExpandNewsLetter]=useState(false)


  return (
    <div className="w-[100vw] bg-transparent py-11 px-3">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:flex-wrap w-[90%] justify-between md:items-start">
        
                    <div className="company-desc basis-[25%] flex flex-col items-center md:items-start">
                      <h1 className="my-3 text-2xl bg-gradient-to-r from-[#7515e3] to-[#2b70f8] bg-clip-text text-transparent">ElectSmart</h1>
                      <p className="text-[#605D5D] text-center md:text-left md:text-sm xl:text-lg md:line-clamp-6 xl:line-clamp-none">
                      Empower your voice with ElectSmart, your premier destination for informed voting. Dive into a world of political insight, candidate profiles, and electoral updates tailored to your interests. Join a community of engaged citizens and make your mark on the future. Choose ElectSmart for an informed and empowered voting experience.
                      </p>
                    </div>

                    <div className="contact_location basis-[15%] flex flex-col items-center md:items-start">
                      <h1 className="text-white my-3" onClick={()=>{SetExpandLocation(!Expandlocation)}}>Location <span className="md:hidden" > {Expandlocation?"-":"+"}</span></h1>
                      <div className={`text flex-col gap-3 items-center md:items-start ${Expandlocation?"flex":"hidden md:flex"}`}>
                        <p className="text-[#898484] text-xs xl:text-lg">ElectSmart@gmail.com</p>
                        <p className="text-[#898484] text-xs xl:text-lg">+91 9137228225</p>
                        <p className="text-[#898484] text-xs xl:text-lg">
                           ElectSmart, Vile-Parle(East), Mumbai
                        </p>
                        <p className="text-[#898484] text-xs xl:text-lg"><a href="https://maps.app.goo.gl/gW5CP64BqVg7jcD18" target="_target" className="cursor-pointer">CHECK ON MAP</a></p>
                      </div>
                    </div>

                    <div className="site-links basis-[15%] flex flex-col items-center md:items-start">
                      <h1 className="text-white my-3" onClick={()=>{SetExpandLinks(!ExpandLinks)}}>Site Link <span className="md:hidden" >{ExpandLinks?"-":"+"}</span></h1>
                      <div className={`text flex-col gap-3 items-center md:items-start ${ExpandLinks?"flex":"hidden md:flex"}`}>
                        <p className="text-[#898484] md:text-xs xl:text-lg">HOME</p>
                        <p className="text-[#898484] md:text-xs xl:text-lg">ABOUT US</p>
                        <p className="text-[#898484] md:text-xs xl:text-lg">CONTACT US</p>
                        <p className="text-[#898484] md:text-xs xl:text-lg">FAQ</p>
                        <p className="text-[#898484] md:text-xs xl:text-lg">PRIVACY POLICY</p>
                      </div>
                    </div>

                    <div className="newsletter fbasis-[15%] flex flex-col items-center md:items-start">
                      <h1 className="text-white my-3" onClick={()=>{SetExpandNewsLetter(!ExpandNewsLetter)}}>NEWSLETTERS <span className="md:hidden">{ExpandNewsLetter?"-":"+"}</span></h1>
                      <div className={`text flex-col gap-3 items-center md:items-start ${ExpandNewsLetter?"flex":"hidden md:flex"}`}>
                        <input type="text" placeholder="NAME" className="px-2 focus:outline-0 py-1 bg-[#2a2b2c] placeholder:text-[#A7A0A0] text-[#A7A0A0] cursor-text text-xs xl:text-lg"/>
                        <input type="email" placeholder="EMAIL ID" className="px-2 focus:outline-0 py-1 bg-[#2C2A2A] placeholder:text-[#A7A0A0] text-[#A7A0A0] cursor-text text-xs xl:text-lg"/>
                        <button className="bg-gradient-to-r from-[#7515e3] to-[#2b70f8] text-[#2C2A2A] p-1 w-[100%] ">SUBSCRIBE</button>
                      </div>
                    </div>
                    
      </div>
      <div className="copy flex flex-col items-center mt-9 translate-y-5">
          <hr className="border-x-[48vw] border-[#757171]"/>
          <p className="text-[#757171] mt-5">©COPYRIGHT - TURBOFLARE</p>
      </div>
    </div>
  );
}
