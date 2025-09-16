import React from 'react'
import { ArrowRight, Mail, User } from 'lucide-react'

const Contact = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-28'>

    <div className="mt-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between ">
      
      {/* Contact Form */}
      <form className="flex flex-col items-center text-sm text-slate-800 max-w-lg w-full">
        <p className="text-sm bg-indigo-200 text-primary font-medium px-4 py-2 rounded-full">
          Contact Us
        </p>
        <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
        <p className="max-md:text-sm text-gray-500 pb-10 text-center">
          Or just reach out manually at{" "}
          <a href="mailto:studysync@gmail.com" className="text-primary hover:underline">
            genify@gmail.com
          </a>
        </p>

        <div className="max-w-96 w-full px-4">
          {/* Name */}
          <label htmlFor="name" className="font-medium">Full Name</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-primary transition-all overflow-hidden">
            <User className="w-5 h-5" />
            <input
              type="text"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <label htmlFor="email" className="font-medium mt-4">Email Address</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-primary transition-all overflow-hidden">
            <Mail className="w-5 h-5" />
            <input
              type="email"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Message */}
          <label htmlFor="message" className="font-medium mt-4">Message</label>
          <textarea
            rows="4"
            className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-primary transition-all"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="flex items-center justify-center gap-1 mt-5 bg-primary hover:bg-primary text-white py-2.5 w-full rounded-full transition"
          >
            Submit Form
            <ArrowRight className='w-5 h-5 mt-0.5'/>
          </button>
        </div>
      </form>

      {/* Image (Hidden on Mobile) */}
      <img
        src="/contact.avif"
        alt="contact"
        className="hidden md:block md:mr-10 mt-28 mb-10 md:mb-0 sm:w-1/2 md:max-w-xl"
      />
    </div>
    </div>
  )
}

export default Contact
