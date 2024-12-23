import React from 'react';

const categories = [
  { id: 'general-ai', name: 'General AI' },
  { id: 'image-generation', name: 'Image Generation' },
  // Add more categories as needed
];

const featuredTools = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'OpenAI\'s powerful language model',
    imageUrl: '/images/chatgpt.jpg',
    category: 'general-ai',
    rating: 4.8,
    link: 'https://chat.openai.com'
  },
  {
    id: '2',
    name: 'DALL-E',
    description: 'AI image generation by OpenAI',
    imageUrl: '/images/dalle.jpg',
    category: 'image-generation',
    rating: 4.7,
    link: 'https://openai.com/dall-e-2'
  },
  // Add more tools as needed
];

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Featured AI Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTools.map((tool) => (
          <div key={tool.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={tool.imageUrl} 
              alt={tool.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-2">{tool.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{tool.category}</span>
                <span className="text-sm font-semibold">Rating: {tool.rating}</span>
              </div>
              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 