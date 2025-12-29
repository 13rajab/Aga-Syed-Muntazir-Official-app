
import React from 'react';

const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6">
              The Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">A Life Dedicated to the People</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Aga Syed Muntazir Mehdi is a prominent political leader and religious scholar hailing from the historic Budgam district in Jammu and Kashmir. Coming from a lineage of spiritual leaders (Aga family), he has consistently blended traditional values with modern political discourse.
              </p>
              <p>
                His journey is marked by an unwavering commitment to the socio-economic upliftment of the region, advocating for constitutional rights, and fostering inter-community harmony in a complex geopolitical landscape.
              </p>
              <p>
                As a voice for the youth, he has championed educational reforms and entrepreneurship, believing that the future of Kashmir lies in the hands of its empowered younger generation.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="text-3xl font-bold text-slate-900">1+</h4>
                <p className="text-slate-500">Years of Service</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="text-3xl font-bold text-slate-900">2+</h4>
                <p className="text-slate-500">Initiatives Led</p>
              </div>
              <p> please note that we would change it when he adds more initiatives or something </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/447/800/1000" 
                alt="Aga Syed Muntazir Leadership" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
              <p className="italic text-lg mb-4">"Our greatest strength lies in our resilience and our shared hope for a peaceful, prosperous tomorrow."</p>
              <p className="font-bold">- Aga Syed Muntazir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
