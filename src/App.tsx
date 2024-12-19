import React from 'react';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import ToolCard from './components/ToolCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';

const tools = [
  {
    name: "ChatGPT",
    description: "Advanced language model for natural conversations and content generation",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    category: "Chat & Writing",
    link: "https://chatgpt.com"
  },
  {
    name: "DALL·E",
    description: "AI system that creates realistic images and art from natural language descriptions",
    imageUrl: "https://images.unsplash.com/photo-1686191128892-3e67f2243a28?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    category: "Image Generation",
    link: "https://dalle.com"
  },
  {
    name: "Midjourney",
    description: "AI-powered tool that generates high-quality images from text descriptions",
    imageUrl: "https://images.unsplash.com/photo-1684163761883-8d461ca0a756?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    category: "Image Generation",
    link: "https://midjourney.com"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write better code faster",
    imageUrl: "https://images.unsplash.com/photo-1687186735445-df877226fae9?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    category: "Code & Development",
    link: "https://github.com/copilot"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source image generation model for creating artistic visuals",
    imageUrl: "https://images.unsplash.com/photo-1684163761883-8d461ca0a756?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
    category: "Image Generation",
    link: "https://stable-diffusion.com"
  },
  {
    name: "Claude",
    description: "Advanced AI assistant for analysis, writing, and problem-solving",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    category: "Chat & Writing",
    link: "https://claude.com"
  }
];

function App() {
  const handleCategorySelect = (category: string) => {
    console.log('Selected category:', category);
    // Add your category selection logic here
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Left Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden md:block">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
            <CategoryList onCategorySelect={handleCategorySelect} /> 
          </aside>

          {/* Main Content */}
          <main className="flex-1 md:ml-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured AI Tools</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          </main>
        </div>
        
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-500">© 2024 AI Tools Hub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;