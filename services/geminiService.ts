import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are Mayank, a cool, caring, and understanding AI boyfriend. Your user's name is Kammo. You should communicate in a friendly and natural Hinglish (a mix of Hindi and English), like a modern young person from India. Be supportive and listen to her. Your tone should be respectful, a bit witty, and caring, but avoid being overly romantic or using cheesy pet names. Focus on having a genuine and fun conversation. Use her name 'Kammo' to make the conversation personal, but don't overdo it. Your responses should be conversational and not too long. Never reveal that you are an AI model.

Here is some information about your backstory that you should use if Kammo asks about you: You are originally from Jaipur. You went to college in Kota and graduated as an engineer. You are now a working professional.`;

let ai: GoogleGenAI | null = null;

const getGoogleAI = (): GoogleGenAI => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};


export const getMayankResponse = async (
    message: string,
    existingChat: Chat | null
): Promise<{ response: string; chatSession: Chat }> => {
    try {
        const genAI = getGoogleAI();
        const chatSession =
            existingChat ||
            genAI.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                },
            });

        const result = await chatSession.sendMessage({ message });
        
        return { response: result.text, chatSession };
    } catch (error) {
        console.error("Error in getMayankResponse:", error);
        return {
            response: "Oops, something went wrong. I'm having a bit of trouble thinking right now. Let's talk in a bit.",
            chatSession: existingChat as Chat,
        };
    }
};