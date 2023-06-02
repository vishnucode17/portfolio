import React from 'react';
import cover_video from './static/front-cover.mp4';
import './static/css/index.css';
import vishnu from './static/Vishnu.png';
import vishnu_img from './static/Vishnu_img.png';
import robot from './static/robot.png';
import { motion } from "framer-motion"

function FrontCover() {
    const line1 = "Hi, I'm Vishnu";
    const line2 = "- A multitechnophile";
    const sentence = {
        hidden: {opacity:1},
        visible: {
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    }
    const letter = {
        hidden: {opacity:0,y:50},
        visible:{
            opacity:1,
            y:0,
        },
    }
    return (
        <>
            <nav>
            </nav>
            <div className="front-cover">

                <div className='text-cover'>
                    {/* <img src={vishnu} alt="" id='calliography' /> */}
                    {/* <p id='cover-head'>Hi, I'm <i>Vishnu</i></p>
                    <p id="cover-head">MultiTechnophile</p> */}
                    <motion.h3
                    className='load-screen--message'
                    variants={sentence}
                    initial="hidden"
                    animate="visible">
                        {line1.split("").map((char,index)=>{
                            return(
                                <motion.span key={char+"-"+index} variants={letter}  id='cover-head-1'>
                                    {char}
                                </motion.span>
                            )
                        })}
                        <br />
                        {line2.split("").map((char,index)=>{
                            return(
                                <motion.span key={char+"-"+index} variants={letter}  id='cover-head-2'>
                                    {char}
                                </motion.span>
                            )
                        })}

                    </motion.h3>
                </div>
                <motion.div
                    animate={{ x: -50 }}
                    transition={{
                        type: "spring", stiffness: 100, ease: "linear",
                        duration: 2,
                        x: { duration: 1 }
                    }}>
                    <img src={vishnu_img} alt="" id='vishnu_img' />
                </motion.div>
            </div>
            <h1>Page in construction</h1>
        </>
    );
}

export default FrontCover;