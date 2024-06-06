import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userType } from "../../Types/allTypes";

export const userApi = createApi({
  // reducerPath: To uniquely identify the api slice
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66614a6f63e6a0189fe923e2.mockapi.io/api/v1/",
  }),
  tagTypes:[],
  endpoints: (builder) => ({
    getUser: builder.query<userType,void>({
      query: () => "user",
    }),
  }),
});


//exporting the automatically generated hook for each endpoint that helps in fetching data in the component

//in the import of createApi we have to specify the "/react" as the below lines works only then
export const {useGetUserQuery}=userApi;