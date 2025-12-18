
import React from 'react';
import { UserProfile } from '../types';

interface ProfileSelectionProps {
  profiles: UserProfile[];
  onSelect: (id: string) => void;
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ profiles, onSelect }) => {
  return (
    <div className="min-h-full bg-slate-50 flex flex-col items-center justify-center p-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">FamlyAI</h1>
        <p className="text-slate-500 mt-2 font-medium">Who's using the app today?</p>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onSelect(profile.id)}
            className="group flex flex-col items-center space-y-3 transition-transform active:scale-95"
          >
            <div 
              className="w-24 h-24 rounded-full border-4 shadow-lg overflow-hidden transition-all group-hover:shadow-indigo-200 group-hover:scale-105"
              style={{ borderColor: profile.color }}
            >
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0" 
              />
            </div>
            <span className="font-bold text-slate-700 text-lg">{profile.name}</span>
            <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 text-slate-500 uppercase tracking-tighter">
              {profile.ageGroup}
            </span>
          </button>
        ))}
      </div>

      <button className="text-indigo-600 font-bold flex items-center space-x-2 pt-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        <span>Add New Member</span>
      </button>
    </div>
  );
};

export default ProfileSelection;
