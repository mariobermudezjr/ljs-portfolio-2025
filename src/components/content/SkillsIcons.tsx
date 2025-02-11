import React from 'react';
import Image from 'next/image';


// SVG paths if placed in the public folder
const skills = [

    {
        name: 'Microsoft Excel',
        iconPath: '/icons/ms-excel.svg',
    },
    {
        name: 'Microsoft Outlook',
        iconPath: '/icons/outlook.svg',
    },
    {
        name: 'Microsoft Powerpoint',
        iconPath: '/icons/ms-powerpoint.svg',
    },
    {
        name: 'Microsoft Project',
        iconPath: '/icons/ms-project.svg',
    },
    {
        name: 'Microsoft Word',
        iconPath: '/icons/ms-word.svg',
    },
    {
        name: 'Microsoft Onenote',
        iconPath: '/icons/ms-onenote.svg',
    },
    {
        name: 'Microsoft Power BI',
        iconPath: '/icons/power-bi.svg',
    },
    {
        name: 'Trello',
        iconPath: '/icons/trello.svg',
    },
    {
        name: 'Notion',
        iconPath: '/icons/notion.svg',
    },
    {
        name: 'Google Sheets',
        iconPath: '/icons/google-sheets.svg',
    },
    {
        name: 'Canva',
        iconPath: '/icons/canva.svg',
    },
    {
        name: 'Drop Box',
        iconPath: '/icons/dropbox.svg',
    },
    {
        name: 'Google Drive',
        iconPath: '/icons/google-drive.svg',
    },
    {
        name: 'Zoom',
        iconPath: '/icons/zoom.svg',
    },
    {
        name: 'Jira',
        iconPath: '/icons/jira.svg',
    },
];

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg shadow-lg bg-gray-50 hover:bg-blue-50"
          >
            <Image
              src={skill.iconPath}
              alt={`${skill.name} icon`}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}