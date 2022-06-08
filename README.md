Parallax a very 🆒 looking effect which can be achieved by changing the speed of the layers in the background 🌃.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2jj2ehdf4lihxfbzidor.gif)

Today lets explore how we can make a similar parallax effect in nextjs using a package called react-scroll-parallax 🥰. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r0gnrrri24a9z971iiur.png)
 
https://react-scroll-parallax.damnthat.tv/docs/intro 

```
npm i react-scroll-parallax
```

lets initialize our project using create-next-app

```
npx create-next-app --example with-tailwindcss parallax
```

I made a complete tutorial on youtube you can also check it out 

{% youtube vPhdhA3lZVs %}

now lets continue our blog

First of all replace all typescript file to JavaScript as the starter template comes configured with typescript 😞 or you can also write normal JavaScript 😲 inside the typescript file not a big deal

So first wrap our Component in _app.js with ParallaxProvider and as we are creating our parallax in horizontal scrolling so we have to mention the scrollAxis='horizontal'

```js
import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='horizontal'>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
```

the final effect that we want is something like this 👇🏻

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wcccgz4jn4y333uw62e2.gif)

So as there is our main scene and there are some different components like train, cloud and sun and we want to move the cloud and train with relative to our background image and we want to make sun to be static so we will use useRef and useParallax from react-scroll-parallax to achieve this we will create a const target which will store the outermost div and and then we will use useParallax to create the refs for the inner divs and pass speed and targetElement in the useParallax here is the code 👇🏻

```js
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

```

🥳🥳🥳🥳🎊🎊🎊🎊 Hurrayyyyy!!!! you have created a parallax effect I would recommend you to check out some of these resources for more knowledge 👇🏻

- https://react-scroll-parallax.damnthat.tv/docs/intro

- https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-test/

- https://react-scroll-parallax-examples.vercel.app/

- https://bestofreactjs.com/repo/jscottsmith-react-scroll-parallax-react-image

Connect me on Twitter :- [Twitter 🤝🏻](https://twitter.com/nyctonio)

Do check out my Github for amazing projects:- [Github 🤝🏻](https://github.com/nyctonio/)

Connect me on LinkedIn :- [Linkedin 🤝🏻](https://www.linkedin.com/in/nyctonio)

Read my another article :- [Authentication in nodejs with mongodb bcrypt and jwt web tokens](https://dev.to/nyctonio/authentication-in-node-js-with-mongodb-bcrypt-and-jwt-web-tokens-with-cookies-hl3)

[All React Hooks in A single Post](https://dev.to/nyctonio/all-react-hooks-and-concepts-in-a-single-post-1daf)
