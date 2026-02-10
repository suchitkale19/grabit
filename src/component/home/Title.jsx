import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Title({ name, subtitle }) {
  const rightRef = useRef();
  const leftRef = useRef();
  const containerRef = useRef();
  const nameRef = useRef();
  const subtitleRef = useRef();

  useGSAP(
    () => {
      gsap.from(rightRef.current, {
        x: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        scale: 0,
        delay: 2,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.from(leftRef.current, {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

      gsap.from(nameRef.current, {
        y: 20,
        opacity: 0,
        scrollTrigger: {
          trigger: nameRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="h-24 w-full  border-t border-zinc-800 flex flex-col items-center p-4"
    >
      <div className="flex justify-center items-center gap-2 text-sm">
        <div
          ref={leftRef}
          className="border border-zinc-700 w-32 bg-white"
        ></div>
        <p ref={subtitleRef}>{subtitle}</p>
        <div
          ref={rightRef}
          className="border border-zinc-700 w-32 bg-white"
        ></div>
      </div>
      <h1 ref={nameRef} className="text-4xl">
        {name}
      </h1>
    </div>
  );
}

export default Title;
