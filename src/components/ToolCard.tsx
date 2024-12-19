import React from 'react';

interface ToolCardProps {
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  category: string;
  link: string;
}

export default function ToolCard({ name, description, imageUrl, rating, category, link }: ToolCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{category}</span>
          <span className="text-sm font-semibold">Rating: {rating}</span>
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}