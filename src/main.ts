import './styles.css';

interface PortfolioData {
  name: string;
  subtitle: string;
  work: Array<{
    title: string;
    year: string;
    description: string;
    icon: string;
    url: string;
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
  subtitle: "cs @ toronto metropolitan university",
  work: [
    {
      title: "Data @ Sanofi",
      year: "2026",
      description: "sql + snowflake, llm optimization, power bi for ai platform solutions",
      icon: "/sanofi.png",
      url: "https://www.sanofi.com/en"
    },
    {
      title: "Data @ Creation Technologies",
      year: "2025",
      description: "python automation, oracle sql, power bi for manufacturing",
      icon: "/creation-technologies.png",
      url: "https://www.creationtech.com/"
    },
    {
      title: "Dev @ Riipen",
      description: "react + typescript, node.js + postgresql, full-stack admin portal",
      year: "2025",
      icon: "/riipen.png",
      url: "https://www.riipen.com/"
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
      url: "https://www.linkedin.com/posts/maxence-donio-b20184120_just-wrapped-the-sanofi-x-snowflake-ai-hackathon-ugcPost-7465456899753377792-qqav/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ84wUBuIC2UQZmGFetR9bhXyxsc8EEk9M",
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
  section.className = 'section work-section';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'work';
  section.appendChild(title);

  workItems.forEach(job => {
    const itemContainer = document.createElement('a');
    itemContainer.className = 'work-item';
    itemContainer.href = job.url;
    itemContainer.target = '_blank';
    itemContainer.rel = 'noopener noreferrer';

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

    itemContainer.appendChild(titleRow);
    itemContainer.appendChild(jobDetails);
    section.appendChild(itemContainer);
  });

  return section;
}

function createProjectsSection(projectItems: PortfolioData['projects']): HTMLElement {
  const section = document.createElement('section');
  section.className = 'section projects-section';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'projects';
  section.appendChild(title);

  projectItems.forEach(project => {
    const item = document.createElement('a');
    item.className = 'project-item';
    item.href = project.url;
    item.target = '_blank';
    item.rel = 'noopener noreferrer';

    const projectName = document.createElement('h3');
    projectName.className = 'project-link';
    projectName.textContent = project.name;

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;

    item.appendChild(projectName);
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

function initializeCursorFollower(): void {
  const trailContainer = document.createElement('div');
  trailContainer.className = 'cursor-trail-container';
  document.body.appendChild(trailContainer);

  const buildupElement = document.createElement('div');
  buildupElement.className = 'buildup-circle';
  document.body.appendChild(buildupElement);

  let mouseX = 0;
  let mouseY = 0;
  let lastTrailX = 0;
  let lastTrailY = 0;
  let particleCount = 0;
  let isMouseDown = false;
  let holdStartTime = 0;
  let buildupAnimationId: number | null = null;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Update buildup position while holding
    if (isMouseDown) {
      buildupElement.style.left = mouseX + 'px';
      buildupElement.style.top = mouseY + 'px';
    }

    // Create trail particles at intervals
    const distance = Math.sqrt(
      Math.pow(mouseX - lastTrailX, 2) + Math.pow(mouseY - lastTrailY, 2)
    );

    if (distance > 15) {
      createTrailParticle(trailContainer, mouseX, mouseY, particleCount);
      particleCount++;
      lastTrailX = mouseX;
      lastTrailY = mouseY;
    }
  });

  // Hold to explode on release
  document.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    holdStartTime = Date.now();
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    buildupElement.style.left = mouseX + 'px';
    buildupElement.style.top = mouseY + 'px';
    buildupElement.classList.add('active');

    // Animate buildup
    const animate = () => {
      const elapsed = Date.now() - holdStartTime;
      const progress = Math.min(elapsed / 600, 1); // Full buildup in 600ms
      const scale = 0.2 + progress * 1.8; // Scale from 0.2 to 2
      const opacity = 0.7 * (1 - progress * 0.3); // Brighter fade

      buildupElement.style.transform = `translate(-50%, -50%) scale(${scale})`;
      buildupElement.style.opacity = opacity.toString();

      if (progress < 1) {
        buildupAnimationId = requestAnimationFrame(animate);
      }
    };

    buildupAnimationId = requestAnimationFrame(animate);
  });

  document.addEventListener('mouseup', (e) => {
    if (isMouseDown) {
      if (buildupAnimationId !== null) {
        cancelAnimationFrame(buildupAnimationId);
      }
      
      createClickBurst(trailContainer, e.clientX, e.clientY);
      buildupElement.classList.remove('active');
      buildupElement.style.opacity = '0';
      buildupElement.style.transform = 'translate(-50%, -50%) scale(0.2)';
      isMouseDown = false;
    }
  });
}

function createTrailParticle(container: HTMLElement, x: number, y: number, index: number): void {
  const particle = document.createElement('div');
  particle.className = 'cursor-gradient-circle';
  
  // Cycle through 3 different color variants
  const colorVariant = index % 3;
  particle.setAttribute('data-color', colorVariant.toString());
  
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';

  container.appendChild(particle);

  // Fade out and remove
  setTimeout(() => {
    particle.classList.add('fade-out');
  }, 100);

  setTimeout(() => {
    particle.remove();
  }, 600);
}

function createClickBurst(container: HTMLElement, x: number, y: number): void {
  const particleCount = 8;
  const colorOptions = [0, 1, 2, 3, 4, 5];
  
  // Random angle offset for each click burst
  const angleOffset = Math.random() * Math.PI * 2;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'click-burst-particle';
    
    // Random color for each particle
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    particle.setAttribute('data-color', randomColor.toString());
    
    // Random size variation
    const sizeVariation = 80 + Math.random() * 40;
    particle.style.width = sizeVariation + 'px';
    particle.style.height = sizeVariation + 'px';
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Calculate angle with randomization
    const baseAngle = (i / particleCount) * Math.PI * 2;
    const randomAngleVariation = (Math.random() - 0.5) * 0.4; // Add random variation to angle
    const finalAngle = baseAngle + angleOffset + randomAngleVariation;
    
    // Also randomize distance for each particle
    const distance = 120 + Math.random() * 80;
    
    particle.style.setProperty('--angle', finalAngle.toString());
    particle.style.setProperty('--distance', distance + 'px');
    
    container.appendChild(particle);

    // Remove after animation completes
    setTimeout(() => {
      particle.remove();
    }, 600);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio();
  initializeCursorFollower();
});
