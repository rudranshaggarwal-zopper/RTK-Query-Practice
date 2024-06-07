import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateUserType, userType, withIdUserType } from "../../Types/allTypes";
// import type { userType, withIdUserType as user } from "../../Types/allTypes";

//For getting the data -> use query
//For updating the data ->  use mutation

export const userApi = createApi({
  // reducerPath: To uniquely identify the api slice
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66614a6f63e6a0189fe923e2.mockapi.io/api/v1/",
  }),
  tagTypes: ["user"],

  endpoints: (builder) => ({
    // testmutn:builder.mutation<Result_type,arg_type>,
    createUser: builder.mutation<void, userType>({
      query: (user) => ({
        url: `users`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: builder.query<withIdUserType[], void>({
      // query: () => "user",
      query: () => ({
        url: "users",
        method: "GET",
        // headers:{
        //   Source:"Web",
        //   "Content-Type": "application/json",
        //   "Accept": "application/json",
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //   "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        //   "Access-Control-Allow-Credentials": "true",
        //   "Access-Control-Max-Age": "3600",
        //   "Access-Control-Expose-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        // }
      }),
      providesTags: ["user"],
      async onQueryStarted(id, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("Got the user DATA ..... : ", data);
          console.log("Got the user ID ..... : ", id);
        } catch (error) {
          console.log("Error in getting user..... : ", error);
        }
      },
    }),
    updateUser: builder.mutation<void, updateUserType>({
      query: (user) => {
        console.log("User To be updated: ", user);
        return {
          url: `/users/${user.id}`,
          method: "PUT",
          body: user,
        };
      },
      // After updating the user details, we invalidate the cached data by invalidating the 'user' tag
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation<void,string>({
      query: (id) => {
        
        console.log("User To be deleted: ", id);
        return {
        url: `/users/${id}`,
        method: "DELETE",
        // body: id,
      }},
      invalidatesTags: ["user"],
    }),

    // loginWithSso: builder.query<string, string>({
    //   query: (token) => ({
    //     url: "API_ENDPOINTS.LOGIN",
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Source: "Web",
    //       Lang: "EN",
    //       Authorization: `Token ${token}`,
    //     },
    //   }),
    // async onQueryStarted(_, { _, queryFulfilled }) {
    //   try {
    //     const { data: user } = await queryFulfilled
    //     //   dispatch(updateUserDetails(user))
    //     ToastService.showSuccessTaost({
    //       title: 'Success',
    //       message: 'Login Successful',
    //     })
    //   } catch (err: any) {
    //     // TODO: add failure toast here
    //     ToastService.showErrorToast({ title: 'Unsuccessful', message: 'Invalid Token' })
    //   }
    // },
    // }),
  }),
});

//exporting the automatically generated hook for each endpoint that helps in fetching data in the component

//in the import of createApi we have to specify the "/react" as the below lines works only then
export const { useGetUserQuery, useCreateUserMutation, useUpdateUserMutation,useDeleteUserMutation } =
  userApi;

// when we use a query hook to fetch data we subscribe to that endpoint's cached data , like useGetUserQuery() to fetch the data
