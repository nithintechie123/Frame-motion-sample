import React from 'react'
import { motion } from 'motion/react'

const App = () => {
  return (
    <>
      <div className="flex h-[100vh] w-screen justify-center items-center bg-red-600 text-white">
      <h1 className="text-8xl font-bold relative">
        <div className="overflow-hidden h-[100px]">
        {"HankTheTank".split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, delay: index * 0.01 }}
          >
            {char}
          </motion.span>
        ))}
        </div>
        <svg width="305" height="68" viewBox="0 0 305 68" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[50%] left-[90%] -translate-x-[50%]'>
        <motion.path initial={{pathLength: 0, opacity: "0"}} animate={{pathLength: 1, opacity: "1"}} transition={{duration: 0.7, delay: 0.5}}  d="M3 65.5009C37.5 40.0001 335.951 -8.85807 299 5.00087C262.049 18.8598 108.537 32.2571 101.5 53.5009C94.4626 74.7446 229.141 15.0065 252 30.0016" stroke="#f1c40f" stroke-width="5" stroke-linecap="round" />
      </svg>
      </h1>
      
    </div>
    <div className="flex h-[100vh] w-screen justify-center items-center bg-[#f1c40f]">
      <h1 className="text-8xl font-bold relative">
        <div className="overflow-hidden h-[100px]">
        {"HankTheTank".split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 0.5, delay: index * 0.01 }}
          >
            {char}
          </motion.span>
        ))}
        </div>
        <svg width="305" height="68" viewBox="0 0 305 68" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[50%] left-[90%] -translate-x-[50%]'>
        <motion.path initial={{pathLength: 0, opacity: "0"}} whileInView={{pathLength: 1, opacity: "1"}} transition={{duration: 0.7, delay: 0.5}}  d="M3 65.5009C37.5 40.0001 335.951 -8.85807 299 5.00087C262.049 18.8598 108.537 32.2571 101.5 53.5009C94.4626 74.7446 229.141 15.0065 252 30.0016" stroke="#fff" stroke-width="5" stroke-linecap="round" />
      </svg>
      </h1>
      
    </div>
    </>
  )
}

export default App