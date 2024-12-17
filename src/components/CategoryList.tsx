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
  { name: 'General AI', icon: Brain, count: 156 },
  { name: 'Image Generation', icon: Image, count: 89 },
  { name: 'Chat & Writing', icon: MessageSquare, count: 124 },
  { name: 'Code & Development', icon: Code, count: 67 },
  { name: 'Music Generation', icon: Music, count: 45 },
  { name: 'Video Creation', icon: Video, count: 78 },
  { name: 'Design Tools', icon: PenTool, count: 92 },
  { name: 'Education', icon: BookOpen, count: 103 },
];

export default function CategoryList() {
  return (
    <div className="space-y-2">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.name}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group"
          >
            <div className="flex items-center">
              <Icon className="h-5 w-5 text-blue-500 group-hover:text-blue-600 mr-3" />
              <span className="text-gray-700 group-hover:text-gray-900">{category.name}</span>
            </div>
            <span className="text-sm text-gray-500 group-hover:text-gray-700">{category.count}</span>
          </div>
        );
      })}
    </div>
  );
}