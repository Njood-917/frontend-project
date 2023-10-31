import React from 'react'
import Navbar from './Navbar'
import video1 from '../assets/video1.mp4'
import About from './About'
import styles from './Home.module.css'
import { Category } from './Category'
import MainPage from './MainPage'

export function Home() {
  return (
    <div>
      <div className={styles.video_background}>
        <video autoPlay loop muted className={styles.video_right}>
          <source src={video1} type="video/mp4" />
        </video>

        <div className={styles.content}>
          <h1>Health lifestyle 🌿</h1>
          <p>welcome in our website , make our life more healthier 🏋🏻‍♀️</p>
        </div>
      </div>
      <About />
      <Category />
      <MainPage />
    </div>
  )
}
