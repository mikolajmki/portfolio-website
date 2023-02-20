import React from "react";
import css from './Works.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, textVariant, textVariant2, zoomIn } from "../../utils/motion";
import { workExp } from "../../utils/data";

export const Works = () => {

    return (
        <motion.section 
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
            
            <a className="anchor" id="work"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText yPaddings">My Work Experience</span>

                <div className={`${css.experiences} flexCenter`}>
                    {workExp.map((exp, i) => {
                        return (
                            <motion.div 
                            key={i} 
                            variants={textVariant2}
                            className={css.exp}>
                                <div className={css.post}>
                                    <h1>{exp.place}</h1>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className={css.role}>
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                    <div 
                    className={css.progressBar}
                    variants={zoomIn(1, 1)}>
                        <motion.div 
                        className={css.line}
                        variants={fadeIn('down', 'tween', 2, 1.5)}></motion.div>
                        <div><motion.div 
                        className={css.circle}
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        style={{ background: '#286f6c' }}></motion.div></div>
                        <div><motion.div 
                        className={css.circle}
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        style={{ background: '#f2704e' }}></motion.div></div>
                        <div><motion.div 
                        className={css.circle}
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        style={{ background: '#eec048' }}></motion.div></div>
                    </div>
                </div>

            </div>

        </motion.section>
    )
}