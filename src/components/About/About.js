import React from "react";
import "./About.css";
import img from "../../img/about-img.png";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='about' id='About'>
            <motion.div
                initial={{ x: -300, y: 100, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ x: -300, y: 100, opacity: 0 }}
                className='about_left'
            >
                <div className='round'>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className='customer'
                    >
                        <h2>2.5k</h2>
                        <h4>satisfied customers</h4>
                    </motion.div>

                    <img src={img} alt='' />
                </div>
            </motion.div>
            <div className='about_right'>
                <motion.h4
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    about
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    We're cleaning since 2010
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque labore excepturi mollitia maxime modi voluptatibus?
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque labore excepturi mollitia maxime modi voluptatibus?
                </motion.p>
            </div>
        </div>
    );
};

export default About;
