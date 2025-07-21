import { useState } from "react";
import { issuesData } from "../data/issuesData";

export default function useIssues() {
  const [issues, setIssues] = useState(issuesData);

  const addIssue = (newIssue) => {
    const updated = [...issues, { ...newIssue, id: Date.now() }];
    setIssues(updated);
  };

  const updateIssue = (updatedIssue) => {
    const updated = issues.map((issue) =>
      issue.id === updatedIssue.id ? updatedIssue : issue
    );
    setIssues(updated);
  };

  const deleteIssue = (id) => {
    const updated = issues.filter((issue) => issue.id !== id);
    setIssues(updated);
  };

  const searchIssues = (term) => {
    return issues.filter(
      (issue) =>
        issue.title.toLowerCase().includes(term.toLowerCase()) ||
        issue.description.toLowerCase().includes(term.toLowerCase())
    );
  };

  return {
    issues,
    addIssue,
    updateIssue,
    deleteIssue,
    searchIssues,
  };
}
