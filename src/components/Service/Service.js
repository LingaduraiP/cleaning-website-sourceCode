import React from "react";
import "./Service.css";
import window from "../../img/service/window.jpg";
import bathroom from "../../img/service/bathroom.jpg";
import house from "../../img/service/house.jpg";
import furniture from "../../img/service/furniture.png";
import { motion } from "framer-motion";

const Service = () => {
    return (
        <div className='service' id='Service'>
            <motion.h4
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duraiton: 2 }}
            >
                service
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duraiton: 2, delay: 0.4 }}
            >
                what we do
            </motion.h2>
            <div className='service-container'>
                <motion.div
                    whileHover={{ opacity: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duraiton: 2, delay: 0.8 }}
                >
                    <img src={window} alt='' />
                    <h4>window cleaning</h4>
                </motion.div>
                <motion.div
                    whileHover={{ opacity: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duraiton: 2, delay: 1.2 }}
                >
                    <img src={bathroom} alt='' />
                    <h4>bathroom cleaning</h4>
                </motion.div>
                <motion.div
                    whileHover={{ opacity: 0 }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duraiton: 2, delay: 1.6 }}
                >
                    <img src={house} alt='' />
                    <h4>corpet cleaning</h4>
                </motion.div>
                <motion.div
                    whileHover={{ opacity: 0 }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duraiton: 2, delay: 2 }}
                >
                    <img src={furniture} alt='' />
                    <h4>furniture cleaning</h4>
                </motion.div>
            </div>
        </div>
    );
};

export default Service;
