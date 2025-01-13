import React from "react";

interface SidebarProps {
  selected: string;
  onSelect: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  const sections = [
    "학력",
    "인턴/대외활동",
    "수상",
    "자격증",
    "어학",
    "보유기술",
    "보유스킬",
  ];

  return (
    <div className="w-48 shadow-md border-r rounded-xl p-4 space-y-4">
      {sections.map((section) => (
        <div
          key={section}
          className={`block text-left px-4 py-2 rounded-lg border-b border-gray-200 last:border-b-0 cursor-pointer ${
            selected === section
              ? "text-primary font-bold bg-gray-100"
              : "text-gray-700 hover:text-primary"
          }`}
          onClick={() => onSelect(section)}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
