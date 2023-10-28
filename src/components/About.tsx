// import React from 'react'; // Not needed in newer versions of React
import styles from './About.module.css' // Clean this up if not needed
import dummble from '../assets/dummble-img.jpg' // Clean this up if not needed
import dites from '../assets/dites-img.jpg' // Clean this up if not needed

function About() {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img
          className="h-full w-full object-cover"
          src="src\assets\photo_2023-10-27_19-08-06.jpg"
          alt="Winding mountain road"
        />
      </div>

      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-1/2 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
            Needing the Gudenice & Motivation
          </h2>
          <p className="mt-4">
            we are here to guide you until you reach your body dream and we will interst in this
            journey , just stay with us and start.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
