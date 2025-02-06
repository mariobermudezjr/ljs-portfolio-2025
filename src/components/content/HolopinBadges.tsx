import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/src/components/ui/SectionHeader';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import Link from 'next/link';
import { siteConfig } from '@/src/configs/config';

const HolopinBadges: React.FC = () => (
  <AnimationContainer customClassName="w-full mt-16">
    <div className="flex flex-col gap-5">
      <SectionHeader
        title="Project Management Institute"
        content="    These achievements represent my involvement in PMI projects and my contributions to the professional
        PM community. I actively engage with students on PMI and other platforms, where I contribute
        mentorship, feedback, and support for new members."
      />


    </div>
  </AnimationContainer>
);

export default HolopinBadges;
