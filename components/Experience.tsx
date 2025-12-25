export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">WORK EXPERIENCE</div>
          <h2 className="section-title">
            Companies I have worked<br />for in the past.
          </h2>
        </div>

        <div className="experience-grid">
          {[
            ['01', 'TripArc', 'July 2025 - Present', ' Product Manager', ' I led end-to-end product strategy for a graph-based microservice unifying user profiles, owned the roadmap and metrics, resolved critical AQA regressions using Dynatrace and SQL to reduce high-severity issues by 60%+, delivered a Bulk Invoice feature that cut manual work by 70% for 200+ agents, and standardized feedback and branding processes to improve response times by 50%.'],
            ['02', '1Password', 'January 2025 - April 2025', ' Product Manager Intern', 'I built a permission-management feature for the IT team that streamlined employee access control for 1,500+ users by improving visibility and reducing engineering overhead. I improved Single Sign-On through cross-functional collaboration, reducing login issues by 25%, and restructured internal permission groups to increase operational efficiency by 40% while reducing security risk.'],
            ['03', 'theScore', 'May 2024 - August 2024', ' Product Manager Intern', 'I led the end-to-end development of a Top 10 games carousel from concept to launch, driving 150,000+ monthly game launches and $1.5M+ in monthly revenue. I delivered an internal AI tool that analyzed 1,000+ monthly App Store reviews to surface competitive and product insights, and implemented game tagging to improve search discovery, increasing click-through rates by 33%.'],
            ['04', 'IBM', 'January 2023 - August 2024', ' Product Manager Intern', 'I collaborated with stakeholders to improve the Air Canada mobile booking experience for 5M+ users through user research, testing, and feature delivery. I redesigned the flight rules screen to increase engagement by 25%, documented and tracked $3M+ in monthly transactions, led delivery of Air Canada’s cargo website for 4M+ monthly visitors, and implemented an online sign-up flow that increased user acquisition by 30%.'],
            ['05', 'TextNow', 'May 2022 - August 2022', ' Product Manager Intern', 'I coordinated the migration of 3,000+ users from unsupported data plans to active TextNow plans, generating $20K+ in monthly revenue while maintaining customer satisfaction, and led the migration of 650+ users from KORE to PWG SIMs, saving the company $7K+ per month.'],
            ['06', 'TribalScale', 'September 2021 - December 2021', ' Product Manager Intern', 'I owned the product backlog for TribalScale’s website team, wrote and prioritized 20+ user stories, kept developers unblocked, and increased development efficiency by 20%. I also reduced content discovery time on SlingTV’s homepage by 15% through A/B testing.'],
            ['07', 'NOVX Systems', 'January 2021 - May 2021', ' Software Developer Intern', 'I led the development and launch of a new interface using WPF/Silverlight, cutting the time it takes doctors and nurses to manage patient billing codes and view payment fees by 50%. I also implemented front-end features with Angular/Silverlight that will be used by over 50,000 patients.'],




          ].map(([num, company, duration, role, description], i) => (
            <div key={num} className={`experience-item fade-in stagger-delay-${i + 1}`}>
              <div className="experience-number">{num}</div>
              <h3>
                <span className="company">{company}</span>,
                <span className="role">{role} </span>
              </h3>
              <p>
                <span className="duration">{duration}</span>{' '}
              </p>
              <p>
                <span className="description">{description}</span>{' '}

              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
