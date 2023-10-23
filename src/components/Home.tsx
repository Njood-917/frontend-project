import React from 'react'
import Navbar from './Navbar'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import styles from './Home.module.css'
import About from './About'


function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.video_background}>
        <video autoPlay loop muted className={styles.video_right}>
          <source src={video1} type="video/mp4" />
        </video>
        {/* <video autoPlay loop muted className={styles.video_right}>
          <source src={video2} type="video/mp4" />
        </video> */}
      </div>
      <div className={styles.content}>
        <h1>Health lifestyle 🌿</h1>
        <p>welcome in our website , let's make our life more healthier 🏋🏻‍♀️</p>
      </div>
      <About />
    </div>
  )
}

export default Home
