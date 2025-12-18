
import React from 'react';
import { UserProfile } from '../types';

interface DashboardProps {
  profile: UserProfile;
}

const Dashboard: React.FC<DashboardProps> = ({ profile }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const renderAgeSpecificContent = () => {
    switch (profile.ageGroup) {
      case 'toddler':
        return (
          <div className="space-y-4">
            <ContentCard 
              title="Time for Colors!" 
              description="Let's learn about the color BLUE today." 
              image="https://picsum.photos/seed/colors/400/200" 
              color="bg-blue-400"
            />
            <ContentCard 
              title="Animal Sounds" 
              description="What does the cow say? Moooo!" 
              image="https://picsum.photos/seed/animals/400/200" 
              color="bg-orange-400"
            />
          </div>
        );
      case 'child':
        return (
          <div className="space-y-4">
            <ContentCard 
              title="Math Quest" 
              description="Solve 3 problems to earn a star!" 
              image="https://picsum.photos/seed/math/400/200" 
              color="bg-green-500"
              badge="Daily Task"
            />
            <ContentCard 
              title="Creative Writing" 
              description="Write a story about a flying turtle." 
              image="https://picsum.photos/seed/write/400/200" 
              color="bg-purple-500"
            />
          </div>
        );
      case 'teen':
        return (
          <div className="space-y-4">
            <ContentCard 
              title="Study Focus" 
              description="25 mins focus session: History Exam Prep." 
              image="https://picsum.photos/seed/study/400/200" 
              color="bg-indigo-500"
              badge="Exam Week"
            />
            <ContentCard 
              title="Mental Wellness" 
              description="5 minute meditation for a clear mind." 
              image="https://picsum.photos/seed/meditate/400/200" 
              color="bg-teal-500"
            />
          </div>
        );
      case 'adult':
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Household Budget</p>
                <p className="text-xl font-extrabold text-slate-900">$2,450.00 left</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
            </div>
            <ContentCard 
              title="Meal Planner" 
              description="Suggestions for tonight: Roasted Chicken." 
              image="https://picsum.photos/seed/food/400/200" 
              color="bg-rose-500"
            />
            <ContentCard 
              title="Shared Calendar" 
              description="Next event: Sophia's Soccer Practice (4 PM)." 
              image="https://picsum.photos/seed/calendar/400/200" 
              color="bg-blue-600"
            />
          </div>
        );
    }
  };

  return (
    <div className="p-6 space-y-8 pb-10">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-400 font-bold text-sm uppercase tracking-wide">{getGreeting()}</h2>
          <h1 className="text-3xl font-extrabold text-slate-900">{profile.name}</h1>
        </div>
        <div 
          className="w-12 h-12 rounded-full border-2 overflow-hidden shadow-sm"
          style={{ borderColor: profile.color }}
        >
          <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
        </div>
      </header>

      <section className="bg-indigo-600 rounded-[2.5rem] p-6 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">AI Quick Tip</h3>
          <p className="text-indigo-100 text-sm leading-relaxed opacity-90">
            {profile.ageGroup === 'adult' 
              ? "Your household's energy usage is down 10% this week. Great job!" 
              : `Hey ${profile.name}, did you know that honeybees can recognize human faces?`}
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h4 className="font-extrabold text-slate-800 text-lg">For You</h4>
          <button className="text-indigo-600 text-xs font-bold uppercase tracking-widest">View All</button>
        </div>
        {renderAgeSpecificContent()}
      </section>
    </div>
  );
};

const ContentCard = ({ title, description, image, color, badge }: any) => (
  <div className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md">
    <div className="h-32 w-full relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
      {badge && (
        <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold text-slate-800 uppercase tracking-tighter shadow-sm">
          {badge}
        </span>
      )}
    </div>
    <div className="p-4 flex items-center justify-between">
      <div>
        <h5 className="font-bold text-slate-900 leading-tight">{title}</h5>
        <p className="text-slate-500 text-sm mt-1">{description}</p>
      </div>
      <button className={`w-10 h-10 rounded-2xl ${color} text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  </div>
);

export default Dashboard;
