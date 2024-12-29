import React from 'react';
import { BookOpen, Users, ShoppingBag, Shield } from 'lucide-react';

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?books,library')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="bg-gradient-to-b from-white/90 to-indigo-50/90 min-h-screen backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Welcome to <span className="text-indigo-600">BOOKHAVEN</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your premier destination for both new and pre-loved books. Discover
              amazing deals on textbooks, novels, and more while contributing to
              sustainable reading.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: 'Vast Selection',
                description:
                  'Browse through thousands of new and used books across various genres.',
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Community Driven',
                description:
                  'Connect with fellow book lovers and trusted sellers in your area.',
              },
              {
                icon: <ShoppingBag className="h-12 w-12" />,
                title: 'Great Deals',
                description:
                  'Find the best prices on used books and save on your reading journey.',
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Secure Shopping',
                description:
                  'Shop with confidence with our secure payment and verification system.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <div className="text-indigo-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="bg-indigo-100/80 p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: '1',
                  title: 'Create an Account',
                  description: 'Register to start browsing our collection.',
                },
                {
                  step: '2',
                  title: 'Find Your Books',
                  description: 'Search through our extensive collection.',
                },
                {
                  step: '3',
                  title: 'Purchase Securely',
                  description: 'Choose your payment method and get your books delivered.',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
