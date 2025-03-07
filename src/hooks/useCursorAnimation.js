import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCursorAnimation = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const blur = document.querySelector("#cursor-blur");
    const nav = document.querySelector("#nav");
    const main = document.querySelector("#main");

    // Cursor animation
    const handleMouseMove = (dets) => {
      const posX = dets.clientX;
      const posY = dets.clientY;
      
      gsap.to(cursor, {
        x: posX,
        y: posY,
        duration: 0.1
      });
      
      gsap.to(blur, {
        x: posX - 250,
        y: posY - 250,
        duration: 0.3
      });
    };

    // Scroll animations
    gsap.to(nav, {
      backgroundColor: "#000",
      duration: 0.5,
      height: "120px",
      scrollTrigger: {
        trigger: nav,
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
      }
    });

    gsap.to(main, {
      backgroundColor: "rgba(0,0,0,1)",
      scrollTrigger: {
        trigger: main,
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
      }
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
};