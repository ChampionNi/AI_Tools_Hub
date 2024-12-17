import React from 'react';
import { 
  Brain, 
  Image, 
  MessageSquare, 
  Code, 
  Music, 
  Video,
  PenTool,
  BookOpen
} from 'lucide-react';

const categories = [
  { name: 'General AI', icon: Brain },
  { name: 'Image Generation', icon: Image },
  { name: 'Chat & Writing', icon: MessageSquare },
  { name: 'Code & Development', icon: Code },
  { name: 'Music Generation', icon: Music },
  { name: 'Video Creation', icon: Video },
  { name: 'Design Tools', icon: PenTool },
  { name: 'Education', icon: BookOpen },
];

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.name}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
          >
            <Icon className="h-6 w-6 text-blue-500 mr-3" />
            <span className="text-gray-700 font-medium">{category.name}</span>
          </div>
        );
      })}
    </div>
  );
}