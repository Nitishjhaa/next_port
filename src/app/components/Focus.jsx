'use client'

import { PiUserFocus } from "react-icons/pi";
import { motion } from "framer-motion";

const Focus = ({ isFocused, setIsFocused }) => {
    return (
        <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => setIsFocused(!isFocused)} 
            className="absolute w-30 rounded-2xl h-10 right-20 top-10 overflow-hidden z-[99999] bg-[#262626] hover:bg-[#565656] cursor-pointer active:scale-90">
            <div className="flex justify-center gap-2 items-center h-10 text-white">
                <PiUserFocus size={25} />
                <span className="text-base">Focus</span>
            </div>
        </motion.div>
    )
}


export default Focus
