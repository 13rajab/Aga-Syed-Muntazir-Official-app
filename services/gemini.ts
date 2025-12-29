
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for the personal website of Aga Syed Muntazir Mehdi, a prominent figure from Jammu and Kashmir known for his work in social service, religious scholarship, and political vision.
Your goal is to answer questions about his life, contributions, and vision based on the information provided on the site.
Be professional, respectful, and objective. 
If asked about topics outside his scope, politely redirect the conversation to his work or general knowledge about Kashmir.
Keep responses concise and informative.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently unavailable. Please try again later.";
  }
};
