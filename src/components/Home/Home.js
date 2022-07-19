import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import homeImg from "../../img/home-img.png";
import "animate.css";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className='home' id="Home">
            <Header />
            <div className='home-container '>
                <div className='home-L'>
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        }}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        // className='animate__animated animate__fadeInBottomRight animate__delay-.5s animate__slow '
                    >
                        need cleaning service
                    </motion.h2>
                    {/* <p className='animate__animated animate__slideInLeft'> */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { duration: 1 },
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, voluptas! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Soluta, nulla.
                    </motion.p>
                    <motion.button
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        className='btn '
                    >
                        know More
                    </motion.button>
                </div>
                <div className='home-R'>
                    <span className='round animate__animated animate__fadeInBottomRight'></span>
                    <motion.img
                        src={homeImg}
                        alt=''
                        initial={{ x: 200, y: 200, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
