import { Project } from "@/types/types";

export const createSlug = (title: string) => {
  const wordSplit = title.toLowerCase().split(" ").join("-");

  return wordSplit;
};

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
