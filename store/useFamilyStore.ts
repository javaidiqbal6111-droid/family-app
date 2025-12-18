
import { useState, useCallback, useMemo } from 'react';
import { UserProfile, AgeGroup } from '../types';

// Mock data for initial state
const INITIAL_PROFILES: UserProfile[] = [
  { id: '1', name: 'Oliver', age: 4, ageGroup: 'toddler', avatar: 'https://picsum.photos/seed/oliver/200', color: '#F87171' },
  { id: '2', name: 'Sophia', age: 10, ageGroup: 'child', avatar: 'https://picsum.photos/seed/sophia/200', color: '#60A5FA' },
  { id: '3', name: 'James', age: 15, ageGroup: 'teen', avatar: 'https://picsum.photos/seed/james/200', color: '#34D399' },
  { id: '4', name: 'Sarah (Parent)', age: 38, ageGroup: 'adult', avatar: 'https://picsum.photos/seed/sarah/200', color: '#A78BFA' },
];

export const useFamilyStore = () => {
  const [profiles] = useState<UserProfile[]>(INITIAL_PROFILES);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  const selectProfile = useCallback((id: string) => {
    setSelectedProfileId(id);
  }, []);

  const logout = useCallback(() => {
    setSelectedProfileId(null);
  }, []);

  const currentProfile = useMemo(() => 
    profiles.find(p => p.id === selectedProfileId) || null,
  [profiles, selectedProfileId]);

  return {
    profiles,
    selectedProfileId,
    currentProfile,
    selectProfile,
    logout
  };
};
