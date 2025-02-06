'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I’ve been managing projects for over 4 years, gaining experience across various industries, methodologies, and tools. I’ve worked on projects involving both operational execution and strategic planning, allowing me to understand and contribute to the entire project lifecycle—from initiation to closure."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src="https://skillicons.dev/icons?i=notion,linkedin,gmail,apple&perline=15"
              alt="My Skills"
              className="relative w-full h-full max-w-3xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
