import { GoogleGenerativeAI } from "@google/generative-ai";
import { v4 as uuidv4 } from "uuid";
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export async function generateBlogStructure(topic) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
    Generate a blog article about "${topic}". 
    Return ONLY a JSON array of objects representing blocks. 
    Do not include markdown code blocks like \`\`\`json. 
    
    The structure must be exactly like this:
    [
      { "type": "heading", "content": "Title" },
      { "type": "subheading", "content": "Subtitle" },
      { "type": "paragraph", "content": "Text content..." },
      { "type": "list", "content": ["Item 1", "Item 2"] },
      { "type": "quote", "content": "A quote" },
      { "type": "code", "content": "console.log('code')" },
      { "type": "image", "content": "https://source.unsplash.com/random/800x400/?${encodeURIComponent(
        topic
      )}" }
    ]
    
    Make it detailed, roughly 6-8 blocks.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const cleanJson = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const rawBlocks = JSON.parse(cleanJson);

    return rawBlocks.map((block) => ({
      ...block,
      id: uuidv4(),
    }));
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw new Error("Failed to generate content.");
  }
}

export async function rewriteContent(text, type) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  // Customize prompt based on block type
  let instruction =
    "Rewrite the following text to be more clear, professional, and engaging.";
  if (type === "heading" || type === "subheading")
    instruction =
      "Rewrite this headline to be more catchy and SEO friendly. Keep it short.";
  if (type === "list")
    instruction =
      "Refine these list items to be more concise and actionable. Return them as a JSON array of strings.";

  const prompt = `${instruction}
    
    Current Content: "${text}"
    
    Return ONLY the rewritten text (or JSON for lists). Do not include explanation.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let output = response.text().trim();

    // Clean up potential markdown formatting from AI
    if (type === "list") {
      output = output
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      try {
        return JSON.parse(output);
      } catch {
        return output.split("\n").map((l) => l.replace(/^- /, ""));
      }
    }

    return output.replace(/^"|"$/g, ""); // Remove surrounding quotes if any
  } catch (error) {
    console.error("Rewrite Error:", error);
    return text; // Return original on error
  }
}

export async function generateDiagramCode(promptText) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
      Create a Mermaid.js diagram based on this request: "${promptText}".
      Return ONLY the Mermaid syntax code. Do not include markdown blocks like \`\`\`mermaid. 
      Do not include explanations.
      Example Output:
      graph TD
        A[Start] --> B{Is it working?}
        B -- Yes --> C[Great!]
        B -- No --> D[Debug]
    `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().trim();
    return text
      .replace(/```mermaid/g, "")
      .replace(/```/g, "")
      .trim();
  } catch (error) {
    console.error("Diagram Gen Error:", error);
    return "graph TD; A[Error] --> B[Try Again];";
  }
}
