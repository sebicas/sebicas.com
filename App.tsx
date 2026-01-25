import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Placeholder sections for future content */}
        <section id="ventures" className="py-20 bg-dark">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Ventures & Investments</h2>
                <p className="text-graytext max-w-2xl mx-auto">
                    As a serial entrepreneur, I'm constantly exploring new opportunities in the tech space.
                    Check out my LinkedIn for the latest updates on my projects.
                </p>
                <a 
                  href="https://www.linkedin.com/in/sebicas/"
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block mt-8 text-primary font-semibold hover:underline"
                >
                    View on LinkedIn &rarr;
                </a>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
