
import React, { useState } from 'react';
import { useFamilyStore } from './store/useFamilyStore';
import Layout from './components/Layout';
import ProfileSelection from './screens/ProfileSelection';
import Dashboard from './screens/Dashboard';
import AIConsultant from './screens/AIConsultant';

const App: React.FC = () => {
  const { profiles, currentProfile, selectProfile, logout } = useFamilyStore();
  const [activeTab, setActiveTab] = useState('home');

  // Handle Profile Selection screen
  if (!currentProfile) {
    return (
      <Layout hideNav>
        <ProfileSelection profiles={profiles} onSelect={selectProfile} />
      </Layout>
    );
  }

  // Handle Main Content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard profile={currentProfile} />;
      case 'ai':
        return <AIConsultant profile={currentProfile} />;
      case 'settings':
        return (
          <div className="p-8 space-y-6">
            <h1 className="text-3xl font-extrabold text-slate-900">Settings</h1>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-3xl border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-800">Current Profile</p>
                  <p className="text-sm text-slate-500">{currentProfile.name} ({currentProfile.ageGroup})</p>
                </div>
                <button 
                  onClick={logout}
                  className="text-rose-600 font-bold text-sm bg-rose-50 px-4 py-2 rounded-xl"
                >
                  Switch
                </button>
              </div>
              
              <div className="bg-white p-4 rounded-3xl border border-slate-100 space-y-4">
                <p className="font-bold text-slate-800">App Preferences</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Dark Mode</span>
                  <div className="w-12 h-6 bg-slate-200 rounded-full relative">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Push Notifications</span>
                  <div className="w-12 h-6 bg-indigo-500 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-10">
              <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-[0.2em]">FamlyAI v1.0.4 Production Build</p>
            </div>
          </div>
        );
      default:
        return <Dashboard profile={currentProfile} />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderTabContent()}
    </Layout>
  );
};

export default App;
