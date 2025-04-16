import React from 'react'
import { motion } from 'framer-motion'
import { variants } from '../variants'
function MotionContainer({ children }) {
    const { container } = variants
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
        >
            {children}
        </motion.div>
    )
}

export default MotionContainer
