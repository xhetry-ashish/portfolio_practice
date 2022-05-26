import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiRoutes, BASE_URL } from "../config/config";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGithubProjects: builder.query({
      query: () => apiRoutes.getGithubProjects,
      transformResponse: (response) => response.data,
      provideTags: ["githubApi"],
    }),
  }),
});

export const { useGetGithubProjectsQuery } = githubApi;
