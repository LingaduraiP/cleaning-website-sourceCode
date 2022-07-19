import React from "react";
import "./Slider.css";
import { FiSettings } from "react-icons/fi";
import "./Slider.css";
import { motion } from "framer-motion";

const Slider = () => {
    const [count, setCount] = React.useState(60);
    const [show, setShow] = React.useState(false);

    const toggle = (e) => {
        e.preventDefault();
        setShow((prev) => !prev);
    };

    // Slider Function
    const html = document.querySelector("html");
    html.style.setProperty("--hue", count);

    return (
        <div className='slider'>
            <button onClick={toggle}>
                <FiSettings />
            </button>
            {show && (
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 0.2 }}
                    exit={{ opacity: 0, x: 200 }}
                    className='sliders'
                >
                    <h4 onClick={toggle}>X</h4>
                    <input
                        className='input'
                        type='range'
                        name='input'
                        id=''
                        onChange={(e) => setCount(e.target.value)}
                        step='1'
                        max='360'
                        min='0'
                        value={count}
                    />

                    <h2> Value : {count}</h2>
                </motion.div>
            )}
        </div>
    );
};

export default Slider;
