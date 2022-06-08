import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import Image from "next/image";

const index = () => {
  const target = useRef(null);
  const train = useParallax({
    speed: 500,
    targetElement: target.current,
  })

  const cloud = useParallax({
    speed: 200,
    targetElement: target.current,
  })

  return (
    <div ref={target} style={{
      backgroundImage: "url('/Scene.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: '3000px'
    }} className="h-screen">
      <div className="fixed top-10 left-40">
        <Image src="/Sun.png" height={120} width={120} />
      </div>
      <div ref={train.ref} className="absolute"
        style={{
          top: '11vh',
          left: '30vw',
        }}
      >
        <Image src="/Train.png" height={350} width={700} />
      </div>
      <div ref={cloud.ref} className="absolute top-10">
        <Image src="/Cloud.png" height={200} width={1000} />
      </div>
    </div>
  );
}

export default index;