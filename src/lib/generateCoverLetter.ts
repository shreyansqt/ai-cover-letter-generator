import type { CoverLetter } from "@/types";
import OpenAI from "openai";

export const generateCoverLetter = async (
  coverLetter: CoverLetter,
  resume: string,
  apiKey: string | undefined
): Promise<string> => {
  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });

  const prompt = `Based on the provided job description, company info, resume and keywords, generate a cover letter in the following format:

  I am excited to apply for the [Role Name] role at [Company Name]. With over ten years of experience in [job responsibilities] and [key requirement], I believe my expertise & motivations align really well with the visions of [team name]. 

Here are three key reasons why I would be an excellent fit:

1. [1-2 sentences showing technical skills match]
2. [1-2 sentences showing leadership and/or soft skills match]
3. [1-2 sentences showing culture fit]

I am looking forward to contributing my skills in taking [team / company name] to the next level. 

Job Description:
${coverLetter.jobDescription}

Company Info:
${coverLetter.companyInfo}

Resume:
${resume}

Keywords:
${coverLetter.keywords
  .filter((k) => k.selected)
  .map((k) => k.keyword)
  .join(", ")}`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content ?? "";
};