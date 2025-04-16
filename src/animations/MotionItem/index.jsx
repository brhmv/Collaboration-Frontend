import React from 'react'
import { motion } from "framer-motion"
import { variants } from '../variants';
function MotionItem({ children }) {
    const { item } = variants;
    return (
        <motion.div
            variants={item}>
            {children}
        </motion.div>
    )
}

export default MotionItem
