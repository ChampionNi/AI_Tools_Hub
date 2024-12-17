import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  category: string;
}

export default function ToolCard({ name, description, imageUrl, rating, category }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <span className="inline-block px-2 py-1 mt-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
          {category}
        </span>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Visit Website
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}