import ReactDOM from 'react-dom/client';
import DarkVeil from './component/DarkVeil';
import GlassSurface from './component/GlassSurface';
import DecryptedText from './component/DecryptedText';
import FadeContent from './component/FadeContent';
import LogoLoop from './component/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import azureDevops from './assets/icons/azure-devops.svg';
import dotnet from './assets/icons/dotnet.svg';
import pythonIcon from './assets/icons/python-vertical.svg';
import powershell from './assets/icons/powershell.svg';
import gitIcon from './assets/icons/git.svg';
import sqlserver from './assets/icons/sqlserver.svg';
import azure from './assets/icons/azure.svg';
import typescript from './assets/icons/typescript.svg';
import './frontend.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/archivo-black';

const fileLogos = [
  { node: <img src={azureDevops} alt="Azure DevOps" />, title: 'Azure DevOps', href: 'https://dev.azure.com' },
  { node: <img src={dotnet} alt=".NET" />, title: '.NET', href: 'https://dotnet.microsoft.com' },
  { node: <img src={pythonIcon} alt="Python" />, title: 'Python', href: 'https://www.python.org' },
  { node: <img src={powershell} alt="PowerShell" />, title: 'PowerShell', href: 'https://learn.microsoft.com/powershell/' },
  { node: <img src={gitIcon} alt="Git" />, title: 'Git', href: 'https://git-scm.com' },
  { node: <img src={sqlserver} alt="SQL Server" />, title: 'SQL Server', href: 'https://www.microsoft.com/en-us/sql-server' },
  { node: <img src={azure} alt="Azure" />, title: 'Azure', href: 'https://azure.microsoft.com' },
  { node: <img src={typescript} alt="TypeScript" />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
];

function Frontend() {
  const HEADER_HEIGHT = 80; // px (kept for reference)

  return (
    <div className="app-root">
      {/* Fixed background behind everything */}
      <div className="bg-fixed">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Fixed header that remains while scrolling */}
      <div className="header-fixed">
        <div className="header-inner">
          <GlassSurface
            width={'100%'}
            height={48}
            borderRadius={50}
            opacity={0.85}
            brightness={80}
            blur={15}
            displace={0.3}
          >
            <div className="header-content">
              <p id="header">Deondre De Freitas | DevOps Engineer | Assistant Vice President @ Neuberger Berman</p>
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* Scrollable area with snap - content starts below fixed header */}
      <div id="snap-main-container" className="app-scroll">
        <section className="section">
          <div className="section1-inner">
            <FadeContent blur={true} duration={1400} initialOpacity={0}>
              <p className="section1-text">Crafting <span className="highlight-purple">sanity</span> into <span className="highlight-purple">chaos</span> driven systems.</p>
            </FadeContent>
          </div>
        </section>

        <section className="section">
          <div className="section2-inner">
            <FadeContent blur={true} duration={1400} initialOpacity={0}>
                <div className="star-row">
                  <svg className="star-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="about-text">About Me</p>
                </div>
                <p className="text-large">I’m a DevOps engineer focused on building scalable, secure, and automated systems with an emphasis on <span className="highlight-purple">CI/CD</span>, <span className="highlight-purple">code quality</span>, and <span className="highlight-purple">operational efficiency</span>.</p>
            </FadeContent>
          </div>
        </section>

        <section className="section">
          <div className="section3-inner">
            <GlassSurface
              width={'100%'}
              height={'100%'}
              borderRadius={20}
              opacity={0.85}
              brightness={80}
              blur={15}
            >
              <p className="contact">Want to collaborate or chat? Send me an email!</p>
              <div className="contact-actions">
              <a href="mailto:deondrede@gmail.com" className="contact-btn">Contact Me</a>
              </div>
              <LogoLoop className="logo-loop"
                logos={fileLogos}
                speed={50}
                direction="left"
                logoHeight={70}
                gap={65}
                hoverSpeed={0}
                scaleOnHover
              />
            </GlassSurface>
          </div>
        </section>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Frontend />);