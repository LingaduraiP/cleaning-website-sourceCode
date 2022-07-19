import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pricing.css";

const Pricing = () => {
    return (
        <div className='pricing' id='Pricing'>
            <motion.h4
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                Pricing
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.4 }}
            >
                Our pricing Plan
            </motion.h2>
            <div className='pricing_container'>
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className='container'
                >
                    <h2>Basic</h2>
                    <div className='rate'>
                        <span>$ 299</span>
                        <span>only</span>
                    </div>

                    <div className='text'>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>window cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>corpet cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faXmark} />
                            <p>bathroom cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faXmark} />
                            <p>furniture cleaning</p>
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1.2 }}
                    className='container'
                >
                    <h2>Standard</h2>
                    <div className='rate'>
                        <span>$ 499</span>
                        <span>only</span>
                    </div>

                    <div className='text'>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>window cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>corpet cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>bathroom cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faXmark} />
                            <p>furniture cleaning</p>
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1.6 }}
                    className='container'
                >
                    <h2>Premium</h2>
                    <div className='rate'>
                        <span>$ 799</span>
                        <span>only</span>
                    </div>

                    <div className='text'>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>window cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>corpet cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>bathroom cleaning</p>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                            <p>furniture cleaning</p>
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
