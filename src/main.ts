interface PortfolioData {
  name: string;
  subtitle: string;
  work: Array<{
    title: string;
    year: string;
    description: string;
    icon: string;
  }>;
  projects: Array<{
    name: string;
    url: string;
    description: string;
  }>;
  links: Array<{
    label: string;
    url: string;
  }>;
}

const portfolioData: PortfolioData = {
  name: "kirsten sotelo",
  subtitle: "CS @ toronto metropolitan university",
  work: [
    {
      title: "Data @ Sanofi",
      year: "2026",
      description: "sql + snowflake, llm optimization, power bi for ai platform solutions",
      icon: "/sanofi.png"
    },
    {
      title: "Data @ Creation Technologies",
      year: "2025",
      description: "python automation, oracle sql, power bi for manufacturing",
      icon: "/creation-technologies.png"
    },
    {
      title: "Dev @ Riipen",
      description: "react + typescript, node.js + postgresql, full-stack admin portal",
      year: "2025",
      icon: "/riipen.png"
    }
  ],
  projects: [
    {
      name: "Orpheus",
      url: "https://github.com/JulianCruzet/Orpheus",
      description: "multi-platform agentic e-commerce store management platform"
    },
    {
      name: "TradeLens",
      url: "#",
      description: "snowflake agentic platform for admin workflows"
    }
  ],
  links: [
  { label: "email", url: "mailto:kirsten.sotelo@gmail.com" },
  { label: "linkedin", url: "https://www.linkedin.com/in/kirstensotelo/" },
  { label: "github", url: "https://github.com/KirstenSotelo" }
]
};

function createWorkSection(workItems: PortfolioData['work']): HTMLElement {
  const section = document.createElement('section');
  section.className = 'section';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'work';
  section.appendChild(title);

  workItems.forEach(job => {
    const item = document.createElement('div');
    item.className = 'work-item';

    const titleRow = document.createElement('div');
    titleRow.className = 'job-title-row';

    const logo = document.createElement('img');
    logo.className = 'job-logo';
    logo.src = job.icon;
    logo.alt = '';
    logo.setAttribute('aria-hidden', 'true');
    logo.loading = 'lazy';

    const jobTitle = document.createElement('h3');
    jobTitle.className = 'job-title';
    jobTitle.textContent = job.title;

    const jobYear = document.createElement('time');
    jobYear.className = 'job-year';
    jobYear.dateTime = job.year;
    jobYear.textContent = job.year;

    titleRow.appendChild(logo);
    titleRow.appendChild(jobTitle);
    titleRow.appendChild(jobYear);

    const jobDetails = document.createElement('p');
    jobDetails.className = 'job-details';
    jobDetails.textContent = job.description;

    item.appendChild(titleRow);
    item.appendChild(jobDetails);
    section.appendChild(item);
  });

  return section;
}

function createProjectsSection(projectItems: PortfolioData['projects']): HTMLElement {
  const section = document.createElement('section');
  section.className = 'section';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'projects';
  section.appendChild(title);

  projectItems.forEach(project => {
    const item = document.createElement('div');
    item.className = 'project-item';

    const link = document.createElement('a');
    link.className = 'project-link';
    link.href = project.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = project.name;

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;

    item.appendChild(link);
    item.appendChild(description);
    section.appendChild(item);
  });

  return section;
}

function createFooter(links: PortfolioData['links']): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'link';
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.label;
    footer.appendChild(a);
  });

  return footer;
}

function initializePortfolio(): void {
  const container = document.getElementById('app');
  if (!container) return;

  // Header
  const header = document.createElement('header');
  header.className = 'header';

  const name = document.createElement('h1');
  name.className = 'name';
  name.textContent = portfolioData.name;

  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = portfolioData.subtitle;

  header.appendChild(name);
  header.appendChild(subtitle);
  container.appendChild(header);

  // Work Section
  container.appendChild(createWorkSection(portfolioData.work));

  // Projects Section
  container.appendChild(createProjectsSection(portfolioData.projects));

  // Footer
  container.appendChild(createFooter(portfolioData.links));
}

import './styles.css';

document.addEventListener('DOMContentLoaded', initializePortfolio);
