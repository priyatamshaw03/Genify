import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <div className='px-4 sm:px-20 xl:px-32 py-28'>

    <div className="flex flex-col md:flex-row items-center justify-around text-sm border border-gray-200 rounded-2xl m-auto max-w-5xl w-full bg-gray-50">
                
            <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
                <h2 className="md:text-4xl text-2xl font-bold text-gray-800">Boost your productivity.<br />Start using our app today.</h2>
        
                <div className="flex items-center gap-4 mt-6">
                    <Link to='/ai' type="button" aria-label="getStarted" className="bg-primary  px-7 py-2.5 text-white rounded-full active:scale-95 transition-all">
                        Get started free
                    </Link>
                    <Link to='/about-us' type="button" className="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition">
                        Learn more
                        <ArrowRight className="w-4 h-4 mt-0.5"/>
                    </Link>
                </div>
            </div>
        
            <img className="max-w-[375px] pt-10 md:p-0" src="/excitedWomenImage.png" alt="excitedWomenImage" />
        </div>
    </div>
  )
}

export default CallToAction