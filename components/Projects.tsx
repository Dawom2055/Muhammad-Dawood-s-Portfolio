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
      description: 'Led delivery of a bulk upload invoicing tool for travel agents, cutting manual processing time by 70% and improving efficiency for 200+ agents.',
      image: Img6,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
    {
      title: '1Password',
      description: 'Built internal permission-management tooling that improved access control visibility and operational efficiency for 1,500+ users while reducing security risk.',
      image: Img4,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
     {
      title: 'theScore Top 10 Carousel',
      description: 'Owned end-to-end development of a Top 10 games carousel, driving 150,000+ monthly launches and over $1.5M in monthly revenue.',
      image: Img3,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
    {
      title: 'Air Canada Mobile App Fare Rules',
      description: 'Revamped the fare rules screen in the Air Canada mobile app to improve clarity and usability, increasing user engagement by 25%.',
      image: Img2,
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
        {
      title: 'Air Canada Cargo Website Revamp',
      description: 'Led production of Air Canada’s cargo website, delivering new features to 4M+ monthly users and increasing user acquisition by 30%.',
      image: Img1,
      link: 'https://www.aircanadacargo.com',
      objectFit: 'contain' as const,  // Add "as const" to fix TypeScript error
    },
            {
      title: 'SlingTV Carousel Restructuring',
      description: 'Improved time to video by reordering homepage carousels using historical engagement data and behavioral analysis, reducing friction to content playback.',
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
