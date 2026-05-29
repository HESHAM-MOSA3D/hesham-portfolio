import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const rx = useRef(0), ry = useRef(0);
  const mx = useRef(0), my = useRef(0);

  useEffect(() => {
    const move = (e) => {
      mx.current = e.clientX; my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + "px";
        cursorRef.current.style.top  = e.clientY - 6 + "px";
      }
    };
    document.addEventListener("mousemove", move);

    let raf;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current - 18 + "px";
        ringRef.current.style.top  = ry.current - 18 + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { document.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{
        width:12,height:12,background:"var(--accent)",borderRadius:"50%",
        position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999,mixBlendMode:"screen"
      }}/>
      <div ref={ringRef} style={{
        width:36,height:36,border:"1.5px solid var(--accent)",borderRadius:"50%",
        position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9998,opacity:0.4,transition:"none"
      }}/>
    </>
  );
}
