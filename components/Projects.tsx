import Image from 'next/image';
import Img1 from 'app/AirCanadaCargo.jpg';
import Img2 from 'app/AirCanadaMobileApp.jpg';
import Img3 from 'app/theScore.jpg';
import Img4 from 'app/1Password.jpg';
import Img5 from 'app/SlingTV.jpg';
import Img6 from 'app/RANGE.jpg';

export default function Projects() {
  const projects = [

        {
      title: 'Bulk Invoice Upload',
      description: 'on impactful user-facing products.',
      image: Img6,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
    {
      title: '1Password',
      description: 'on impactful user-facing products.',
      image: Img4,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
     {
      title: 'theScore Top 10 Carousel',
      description: 'on impactful user-facing products.',
      image: Img3,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
    {
      title: 'Air Canada Mobile App Fare Rules',
      description: 'on impactful user-facing products.',
      image: Img2,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
        {
      title: 'Air Canada Cargo Website Revamp',
      description: 'on impactful user-facing products.',
      image: Img1,
      link: 'https://www.aircanadacargo.com',
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
            {
      title: 'SlingTV Carousel Restructuring',
      description: 'on impactful user-facing products.',
      image: Img5,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
  ];

  return (
    <section id="projects">
      <div className="container">
         <div className="skills-header fade-in">
                <h2>My Projects</h2>
                <p>Throughout my career as a Product Manager, here are all the projects that I've had the priviledge to work on</p>
            </div>
        <div className="projects-grid">
          {projects.map(({ title, description, image, link, objectFit }, i) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card scale-in stagger-delay-${i + 1}`}
            >
              <div className="project-image">
                <Image 
                  src={image} 
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
