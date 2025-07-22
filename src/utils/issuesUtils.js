export function addIssue(issues, newIssue) {
  return [...issues, { id: Date.now(), ...newIssue }];
}

export function editIssue(issues, editedIssue) {
  return issues.map((issue) =>
    issue.id === editedIssue.id ? editedIssue : issue,
  );
}

export function deleteIssue(issues, id) {
  return issues.filter((issue) => issue.id !== id);
}

export function searchIssues(issues, term) {
  const lowerTerm = term.toLowerCase();
  return issues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(lowerTerm) ||
      issue.description.toLowerCase().includes(lowerTerm),
  );
}

export const issuesUtils = {
  addIssue,
  editIssue,
  deleteIssue,
  searchIssues,
};
