"use client";
import { useCoverLetter } from "@/hooks/use-cover-letter";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
import { Textarea } from "../ui/textarea";

export const StepJobDescription = ({ id }: { id: string }) => {
  const { coverLetter, updateCoverLetter } = useCoverLetter(id);
  useEffect(() => {
    updateCoverLetter({
      currentStep: "job-description",
    });
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateCoverLetter({
      jobDescription: e.target.value,
    });
  };
  return (
    <div className="flex flex-col gap-2 h-full">
      <Label htmlFor="jobDescription">Job Description</Label>
      <Textarea
        id="jobDescription"
        placeholder="Paste the job description here..."
        value={coverLetter.jobDescription}
        onChange={handleChange}
        className="flex-1 resize-none"
      />
    </div>
  );
};