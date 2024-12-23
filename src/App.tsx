import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';

const categories = [
  { id: 'general-ai', name: 'General AI' },
  { id: 'image-generation', name: 'Image Generation' },
  { id: 'chat-writing', name: 'Chat & Writing' },
  { id: 'code-development', name: 'Code & Development' }
];

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Categories Sidebar - Always visible */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
              </Routes>
            </main>
          </div>
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