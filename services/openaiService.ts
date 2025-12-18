
import { AgeGroup, UserProfile } from '../types';

/**
 * Service to handle OpenAI interactions.
 * In a real-world production app, these calls should go through a secure backend 
 * to protect the API Key.
 */
export class OpenAIService {
  private static readonly API_URL = 'https://api.openai.com/v1/chat/completions';
  
  // Note: Using an environment variable as per standard secure practices.
  // The consumer must ensure process.env.OPENAI_API_KEY is available.
  private static getApiKey(): string {
    return (window as any).OPENAI_API_KEY || 'YOUR_OPENAI_KEY_HERE';
  }

  /**
   * Generates a context-aware system prompt based on the user's age group.
   */
  private static getSystemPrompt(profile: UserProfile): string {
    const { ageGroup, name } = profile;
    
    const base = `You are a helpful, friendly family AI assistant named "FamlyBot". The user is ${name}, a ${ageGroup}. `;
    
    switch (ageGroup) {
      case 'toddler':
        return base + "Use very simple words, talk about colors, animals, and basic shapes. Keep responses very short and encouraging. Use emojis often. If asked complex questions, redirect to simple fun facts.";
      case 'child':
        return base + "Use simple but educational language. Be curious and encouraging. Focus on hobbies, school subjects, and creative play. Explain things clearly.";
      case 'teen':
        return base + "Speak like a cool, supportive mentor. Use modern but polite language. Help with productivity, study tips, or casual conversation about music/tech. Be empathetic.";
      case 'adult':
        return base + "Be professional, efficient, and highly capable. Focus on household management, meal planning, scheduling, and high-level advice. Use a mature tone.";
      default:
        return base + "Be helpful and concise.";
    }
  }

  /**
   * Fetches a response from ChatGPT
   */
  public static async getChatGPTResponse(
    profile: UserProfile, 
    userMessage: string
  ): Promise<string> {
    const apiKey = this.getApiKey();
    if (!apiKey || apiKey === 'YOUR_OPENAI_KEY_HERE') {
      return "OpenAI API Key is missing. Please configure it in the application environment.";
    }

    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o', // Using latest high-performance model
          messages: [
            { role: 'system', content: this.getSystemPrompt(profile) },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0].message.content || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("ChatGPT Integration Error:", error);
      return "Oops! I'm having a little trouble connecting to my brain right now. Can you try again later?";
    }
  }
}
