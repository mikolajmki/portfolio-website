import React from "react";
import { fadeIn, staggerChildren } from "../../utils/motion";
import css from './Portfolio.module.scss';
import { motion } from 'framer-motion';

export const Portfolio = () => {
    return (
        <motion.section 
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>

            <a className="anchor" id="portfolio"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className="primaryText">
                            My latest works
                        </span>
                        <p style={{ marginTop: "10px" }}>
                            Perfect solution for digital experience
                        </p>
                    </div>
                    <span className={css.secondaryText}>Explore more works</span>
                </div>

                <div className={`flexCenter ${css.showCase}`}>
                    <motion.img
                    variants={fadeIn('up', 'tween', 0.5, 0.6)}
                    src="./showCase1.png"
                    alt="project"/>
                                        <motion.img
                    variants={fadeIn('up', 'tween', 0.7, 0.6)}
                    src="./showCase2.png"
                    alt="project"/>
                    <motion.img
                    variants={fadeIn('up', 'tween', 0.9, 0.6)}
                    src="./showCase3.png"
                    alt="project"/>
                </div>

            </div>
        </motion.section>
    )
}