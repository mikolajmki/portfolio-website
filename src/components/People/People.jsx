import React from "react";
import css from './People.module.scss';
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { comments, sliderSettings } from "../../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const People = () => {
    return (
        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="people"></a>
            <motion.div 
            variants={footerVariants}
            className={`yPaddings innerWidth ${css.container}`}>
                
                <div className={`flexCenter ${css.heading}`}>

                    <span className="primaryText">People talk about us</span>
                    <p style={{ marginTop: '2rem' }}>Sample text</p>
                    <p>The process of submitting was easy</p>

                </div>

                <div className={`yPaddings ${css.comments}`}>
                    <Slider style={{ color: 'white' }} { ...sliderSettings } className={css.slider}>
                        { comments.map((comment, i) => {
                            return (
                                <div key={i} className={`flexCenter ${css.comment}`}>
                                    <img src={comment.img} alt="" />
                                    <p>{comment.comment}</p>
                                    <div className={css.line}></div>
                                    <div className={css.bio}>
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
                                    </div>
                                </div>
                            );
                        }) }
                    </Slider>
                </div>

            </motion.div>
        </motion.section>
    )
}