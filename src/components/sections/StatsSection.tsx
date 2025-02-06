'use client';
import React from 'react';
import GitHubStreak from '@/src/components/content/GitHubStreak';
import GitHubTrophies from '@/src/components/content/GitHubTrophies';
import GitHubContributionHistory from '@/src/components/content/GitHubContributionHistory';
import SectionHeader from '@/src/components/ui/SectionHeader';
import AnimationContainer from '@/src/components/utils/AnimationContainer';

const StatsSection: React.FC = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className=" w-full h-full  text-black dark:text-white bg-transparent">
        <SectionHeader
          title="Medium Stats"
          content="Explore some of my key stats, achievements, and contributions on Medium. Here's a snapshot of my journey on Medium."
        />

      </div>
    </AnimationContainer>
  );
};

export default StatsSection;
