import React, { useState } from "react";
import css from './Header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

export const Header = () => {
    
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();

    return (
        <motion.div 
        initial="hidden"
        className={`paddings ${css.wrapper}`}
        viewport={{once: false, amount: 0.25}}
        variants={headerVariants}
        whileInView="show"
        style={{ boxShadow: headerShadow }}>
            
            <div className={`flexCenter innerWidth ${css.container}`}>
                
                <div className={css.name}>
                    Mikolaj
                </div>

                <ul className={css.menu} style={ getMenuStyles(menuOpened) }>
                    <li><a href="">Services</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href=""><p>+48 883025755</p></a></li>
                    <BiPhoneCall size={'40px'}/>
                </ul>

                <div className={css.menuIcon} onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>

        </motion.div>
    )
}