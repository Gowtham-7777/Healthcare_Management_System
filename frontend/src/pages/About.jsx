import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Smart Health, your dedicated ally in healthcare accessibility and convenience. At Smart Health, we understand the complexity of managing health amidst today’s fast-paced lifestyle. That’s why we’re committed to delivering a platform that seamlessly connects you to trusted healthcare providers, allowing you to schedule appointments, access medical records, and consult with doctors, all from the comfort of your home.</p>
          <p>We prioritize your health and well-being, continuously enhancing our platform with cutting-edge technology to ensure a smooth, efficient, and reliable experience. Whether you’re booking an initial consultation, following up on treatment, or managing chronic care, Smart Health is here to empower and support your healthcare journey.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At Smart Health, our vision is to transform healthcare accessibility by bridging the gap between patients and medical professionals. We aim to create a future where healthcare is as accessible as possible, giving everyone the tools and support to prioritize their health without barriers. Through our innovative platform, we strive to redefine healthcare convenience and be a trusted partner in every user’s wellness journey.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About