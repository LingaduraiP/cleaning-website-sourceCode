import React from "react";
import "./Team.css";
import one from "../../img/team/1.png";
import two from "../../img/team/2.png";
import three from "../../img/team/3.png";
import { motion } from "framer-motion";

const Team = () => {
    return (
        <div className='team'>
            <motion.h4
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                Team
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
            >
                meat our team
            </motion.h2>

            <div className='items'>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className='item'
                >
                    <div className='circle'>
                        <img src={one} alt='' />
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.4 }}
                            className='text'
                        >
                            <h3>Lingadurai</h3>
                            <span>Team leader</span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 0.6 }}
                    className='item'
                >
                    <div className='circle'>
                        <img src={two} alt='' />
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.4 }}
                            className='text'
                        >
                            <h3>Esakkiraj</h3>
                            <span>co leader</span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className='item'
                >
                    <div className='circle'>
                        <img src={three} alt='' />
                        <motion.div
                            initial={{ opacity: 0, y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.4 }}
                            className='text'
                        >
                            <h3>muthu</h3>
                            <span>employee</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Team;
