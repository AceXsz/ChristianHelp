import React from 'react';

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

export function SearchBar({ search, onSearchChange, onCategorySelect, selectedCategory }: SearchBarProps) {
  const categories = ['all', 'faith', 'prayer', 'bible', 'lifestyle', 'doctrine'];

  return (
    <div className="mb-8 space-y-4">
      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}