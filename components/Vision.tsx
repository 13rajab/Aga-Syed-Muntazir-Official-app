
import React from 'react';

const Vision: React.FC = () => {
  const pillars = [
    {
      title: "Social Justice",
      description: "Ensuring every citizen, regardless of their background, has access to basic rights, healthcare, and equal opportunities.",
      icon: "fa-balance-scale"
    },
    {
      title: "Youth Empowerment",
      description: "Investing in modern education, vocational training, and technology to prepare the youth for global challenges.",
      icon: "fa-graduation-cap"
    },
    {
      title: "Sustainable Development",
      description: "Promoting eco-friendly tourism and local industries while preserving the pristine environment of the valley.",
      icon: "fa-leaf"
    },
    {
      title: "Community Harmony",
      description: "Building bridges between different segments of society through dialogue, mutual respect, and cultural celebration.",
      icon: "fa-hands-helping"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">The Strategic Vision</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">A roadmap for a progressive Jammu & Kashmir built on the foundations of heritage and innovation.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <i className={`fas ${pillar.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-500 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
