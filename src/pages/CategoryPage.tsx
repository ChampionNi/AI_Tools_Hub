import React from 'react';
import { useParams } from 'react-router-dom';

interface Tool {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  url: string;
  // Add other properties as needed
}

const mockTools = {
  'general-ai': [
    { id: '1', name: 'ChatGPT', description: 'OpenAI\'s powerful language model', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', category: 'general-ai', url: 'https://chat.openai.com' },
    { id: '2', name: 'Claude', description: 'Anthropic\'s AI assistant', imageUrl: 'https://images.unsplash.com/photo-1676277791606-7b68a2d17c46?auto=format&fit=crop&q=80&w=800', category: 'general-ai', url: 'https://claude.ai' },
  ],
  'image-generation': [
    { id: '3', name: 'DALL-E', description: 'AI image generation by OpenAI', imageUrl: 'https://images.unsplash.com/photo-1686191128892-3e67f2243a28?auto=format&fit=crop&q=80&w=800', category: 'image-generation', url: 'https://dall-e.com' },
    { id: '4', name: 'Midjourney', description: 'Create artistic images with AI', imageUrl: 'https://images.unsplash.com/photo-1684163761883-8d461ca0a756?auto=format&fit=crop&q=80&w=800', category: 'image-generation', url: 'https://midjourney.com' },
  ],
  'chat-writing': [],
  'code-development': []
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

  return (
    <div className="h-full">
      <section>
        <h2 className="text-3xl font-bold mb-6 capitalize">
          {categoryId?.replace(/-/g, ' ')}
        </h2>
        
        {loading ? (
          <div className="flex justify-center p-8">Loading...</div>
        ) : tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a 
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow block"
              >
                <img 
                  src={tool.imageUrl} 
                  alt={tool.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
                <p className="text-gray-600">{tool.description}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[400px] text-gray-500">
            No tools found in this category
          </div>
        )}
      </section>
    </div>
  );
} 