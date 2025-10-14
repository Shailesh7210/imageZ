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
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

  const navigate = useNavigate()
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the Magic. Try Now</h1>
      <button onClick={()=>navigate('/buy')} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-yellow-500 text-red-500 m-auto hover:scale-105 transition-all duration-500'>Subscription
        <img src={assets.star_group} alt='' className='h-6'/>
      </button>

    </motion.div>
  )
}

export default GenerateBtn
