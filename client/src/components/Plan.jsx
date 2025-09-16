import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
    return (
        <div className=' px-4 sm:px-20 xl:px-32 py-24'>

        <div className='max-w-2xl mx-auto z-20'>
            <div className='text-center'>
                <h2 className='text-primary text-3xl md:text-5xl font-semibold'>Choose Your Plan</h2>
                <p className='text-slate-500 py-6 max-w-lg mx-auto'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
            </div>
            <div className='mt-14 max-sm:mx-8'>
            <PricingTable />
            </div>
        </div>
        </div>
    )
}

export default Plan