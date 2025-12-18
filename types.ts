
export type AgeGroup = 'toddler' | 'child' | 'teen' | 'adult';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  ageGroup: AgeGroup;
  avatar: string;
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface HouseholdState {
  profiles: UserProfile[];
  selectedProfileId: string | null;
  isLoading: boolean;
  error: string | null;
}
