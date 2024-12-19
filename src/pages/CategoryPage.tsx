import React from 'react';
import { useParams } from 'react-router-dom';

interface Tool {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  // Add other properties as needed
}

const mockTools = {
  'general-ai': [
    { id: '1', name: 'ChatGPT', description: 'OpenAI\'s powerful language model', imageUrl: '/images/chatgpt.jpg', category: 'general-ai' },
    { id: '2', name: 'Claude', description: 'Anthropic\'s AI assistant', imageUrl: '/images/claude.jpg', category: 'general-ai' },
  ],
  'image-generation': [
    { id: '3', name: 'DALL-E', description: 'AI image generation by OpenAI', imageUrl: '/images/dalle.jpg', category: 'image-generation' },
    { id: '4', name: 'Midjourney', description: 'Create artistic images with AI', imageUrl: '/images/midjourney.jpg', category: 'image-generation' },
  ],
  // Add more categories as needed
};

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [tools, setTools] = React.useState<Tool[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchToolsByCategory = async () => {
      try {
        setLoading(true);
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 500)); // Fake loading delay
        const categoryTools = mockTools[categoryId as keyof typeof mockTools] || [];
        setTools(categoryTools);
      } catch (error) {
        console.error('Error fetching tools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToolsByCategory();
  }, [categoryId]);

  if (loading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 capitalize">
          {categoryId?.replace(/-/g, ' ')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img 
                src={tool.imageUrl} 
                alt={tool.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>

        {tools.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No tools found in this category
          </div>
        )}
      </div>
    </section>
  );
} 