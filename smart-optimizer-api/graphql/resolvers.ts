import { generateOptimizedText } from "../lib/llm";

export const resolvers = {
  Mutation: {
    optimizePost: async (_: any, { input }: any) => {
      const { baseText, platforms, tone } = input;

      return await Promise.all(
        platforms.map(async (platform: string) => {
          const optimizedText = await generateOptimizedText({
            baseText,
            platform,
            tone,
          });

          return {
            platform,
            optimizedText,
            hashtags: [], 
            characterCount: optimizedText.length,
          };
        })
      );
    },
  },
};
