'use client';

import Image from 'next/image'
import UniversityLogo from 'public/UWaterloo.png'

export default function Education() {
  return (
     <section id="education">
        <div className="container">
            <div className="education-header fade-in">
                <h1>My Education</h1>
                <p>____________</p>
                <h2>Bachelor Of Applied Science</h2>
                <h3>Systems Design Engineering</h3>
            </div>
            
            <div className="education-card-container">
              <a 
                href="https://uwaterloo.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="education-square-card scale-in"
              >
                <Image
                  src={UniversityLogo}
                  alt="University of Waterloo Logo"
                  fill
                  className="object-cover"
                />
              </a>
            </div>
        </div>
    </section>
  )
}