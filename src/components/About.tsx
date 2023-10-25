import React from 'react'
import styles from './About.module.css'
import dummble from '../assets/dummble-img.jpg'
import dites from '../assets/dites-img.jpg'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.background_about}>
        <img className={styles.img_right} src={dummble} alt="" />
        <img className={styles.img_left} src={dites} alt="" />

        <div className={styles.content}>
          <h1>Needing the Gudenice & Motivation </h1>
          <p>
            we are here to guide you until you reach your body dream and we will interst in this
            journey , just stay with us and start.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
