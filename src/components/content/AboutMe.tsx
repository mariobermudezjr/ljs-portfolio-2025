'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a PMI professional.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , a Project Management Professional (PMI) with a passion for 
        delivering impactful projects and creating solutions that drive results. My journey began with 
        a keen interest in coordinating tasks and solving complex problems, and over the years, this 
        passion has transformed into a fulfilling career in project management.

      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      Throughout my experience, I’ve had the opportunity to assist in managing diverse projects, 
      including collaborating with multinational corporations like Schindler, known for their 
      safety innovation and global impact in the elevator industry. My role involved ensuring 
      project timelines, safety standards, and deliverables were met while fostering effective 
      communication between stakeholders across different regions.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      I’ve also worked on projects within the FinTech sector, collaborating with FinanSys in 
      London to help streamline project execution and support business-critical operations. 
      Whether it’s managing internal systems or improving cross-functional team workflows, 
      I focus on ensuring every milestone is met while keeping quality and efficiency top of mind.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      As a certified PMI professional (CAPM), I’m dedicated to continuous learning and growth. 
      I’ve honed my skills in project planning, resource allocation, risk management, and stakeholder engagement. 
      From using collaborative tools like Trello to overseeing multiple projects simultaneously, 
      I thrive in dynamic environments that require strategic planning and adaptability.
      If you’re looking for a project management partner to help turn ideas into successful outcomes, 
      let’s connect. I’m excited to collaborate and bring value to your next big project!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
