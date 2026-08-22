import { Project } from "@/types/types";

export const getFilteredProjectsByRole = (
  projects: Project[],
  selectedTag: string,
) => {
  return projects.filter((project) =>
    project.roles
      // Gets an array of all the roles in lowercase
      .map((role) => role.toLowerCase())
      .includes(selectedTag.toLowerCase()),
  );
};

export const createSlug = (title: string) => {
  const wordSplit = title.toLowerCase().split(" ").join("-");

  return wordSplit;
};

export function deSlug(text: string) {
  return text.split("-").join(" ").toLowerCase();
}

export function orderDate(array: any[], isAsc?: boolean) {
  if (isAsc) {
    return array.toSorted((a, b) => a["year"] - b["year"]);
  } else {
    return array.toSorted((a, b) => b["year"] - a["year"]);
  }
}
