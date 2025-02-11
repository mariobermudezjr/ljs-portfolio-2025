'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

import SkillsIcon from '../content/SkillsIcons';  // Adjust this if your directory structure is different

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I’ve been managing projects for over 4 years, gaining experience across various industries, methodologies, and tools. I’ve worked on projects involving both operational execution and strategic planning, allowing me to understand and contribute to the entire project lifecycle—from initiation to closure."
        />
        <SkillsIcon />

      </div>
    </AnimationContainer>
  );
};

export default MySkills;
