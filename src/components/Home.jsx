import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai"


const Home = () => {
  return (
   <>
    <div className="home" id='home'>
        <main>
            <h1>TechyStark</h1>
            <p>Solution to your problems</p>
        
        
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero quod odit repellendus veritatis? Similique alias beatae mollitia temporibus facilis?</p>
    </div>
   
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias nulla sit, vero rerum debitis nisi minima possimus corporis aperiam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum numquam dolores vero dolor, non quidem amet iste quos. Quasi, repellat at? Perspiciatis alias illum molestiae. Unde omnis aperiam eius dolores in a ratione sed? Atque blanditiis nesciunt error, fuga et reiciendis culpa unde debitis dicta in repellendus illum ratione reprehenderit.</p>

        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>

                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay: "0.9s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>






   
   </>
  )
}

export default Home
