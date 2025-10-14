// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-black-700 inline-flex text-3xl sm:text-0xl font-bold text-center gap-2 bg-white px-28 py-4 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-700'>How AI Magic Works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Texts Into Stunning Images</p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item,index)=>(
            <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'>
                <img width={40} src={item.icon} alt=''/>
                <div>
                    <h2 className='text-xl font-medium'>{item.title}</h2>
                    <p className='text-orange-500'>{item.description}</p>
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
