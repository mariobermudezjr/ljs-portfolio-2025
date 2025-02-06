'use client';
import React from 'react';
import { siteConfig } from '@/src/configs/config';
import { Button } from '@nextui-org/button';

const SupportMe = () => {
  return (
    <section
      id="support"
      className="text-center mt-12 p-6 bg-black text-white dark:bg-white dark:text-black rounded-lg"
    >
      <h2 className="text-xl sm:text-2xl font-semibold">
        💖 Show Your Support for My Medium Profile!
      </h2>
      <p className="my-4 text-sm sm:text-base">
        As a writer enthusiast, I'm dedicated to creating free and paid
        articles for the community. Your contribution, no matter how small,
        helps me keep this endevour going and make it even better!
      </p>
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
        <Button
          onPress={() => window.open(siteConfig.social.sponsor, '_blank')}
          className="bg-[#1EAEDB] text-white px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg mb-4 sm:mb-0 sm:inline-block transition-all duration-300 transform hover:bg-[#178CB7] hover:shadow-lg dark:bg-[#0A84FF] dark:hover:bg-[#0056A3]"
        >
          Follow on Medium <span className="heartbeat-animation">🧡</span>
        </Button>

      </div>
    </section>
  );
};

export default SupportMe;
