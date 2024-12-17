import React from 'react';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import ToolCard from './components/ToolCard';

const tools = [
  {
    name: "ChatGPT",
    description: "Advanced language model for natural conversations and content generation",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    category: "Chat & Writing"
  },
  {
    name: "DALL·E",
    description: "AI system that creates realistic images and art from natural language descriptions",
    imageUrl: "https://images.unsplash.com/photo-1686191128892-3e67f2243a28?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    category: "Image Generation"
  },
  {
    name: "Midjourney",
    description: "AI-powered tool that generates high-quality images from text descriptions",
    imageUrl: "https://images.unsplash.com/photo-1684163761883-8d461ca0a756?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    category: "Image Generation"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write better code faster",
    imageUrl: "https://images.unsplash.com/photo-1687186735445-df877226fae9?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    category: "Code & Development"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source image generation model for creating artistic visuals",
    imageUrl: "https://images.unsplash.com/photo-1684163761883-8d461ca0a756?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    category: "Image Generation"
  },
  {
    name: "Claude",
    description: "Advanced AI assistant for analysis, writing, and problem-solving",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    category: "Chat & Writing"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <CategoryList />
          
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Featured AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">© 2024 AI Tools Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;