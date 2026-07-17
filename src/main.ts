interface PortfolioData {
  name: string;
  subtitle: string;
  work: Array<{
    title: string;
    year: string;
    description: string;
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
  name: "Your Name",
  subtitle: "Location • School Name",
  work: [
    {
      title: "Job Title @ Company",
      year: "2026",
      description: "Brief description of your role and responsibilities"
    },
    {
      title: "Previous Job @ Previous Company",
      year: "2025",
      description: "Brief description of your role and responsibilities"
    }
  ],
  projects: [
    {
      name: "Project Name",
      url: "#",
      description: "Brief description of what this project does or technology used"
    },
    {
      name: "Another Project",
      url: "#",
      description: "Brief description of what this project does or technology used"
    },
    {
      name: "Third Project",
      url: "#",
      description: "Brief description of what this project does or technology used"
    }
  ],
  links: [
    { label: "email", url: "mailto:email@example.com" },
    { label: "linkedin", url: "#" },
    { label: "github", url: "#" },
    { label: "twitter", url: "#" }
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

    const jobTitle = document.createElement('h3');
    jobTitle.className = 'job-title';
    jobTitle.textContent = job.title;

    const jobYear = document.createElement('p');
    jobYear.className = 'job-description';
    jobYear.textContent = job.year;

    const jobDetails = document.createElement('p');
    jobDetails.className = 'job-details';
    jobDetails.textContent = job.description;

    item.appendChild(jobTitle);
    item.appendChild(jobYear);
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
