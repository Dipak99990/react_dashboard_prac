import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://react-dashboard-prac.onrender.com/" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers"],
  endpoints: (build) => ({
    getUser: build.query({ query: (id) => `general/User/${id}` }),
    getProducts: build.query({ query: () => "client/products" }),
    getCustomers: build.query({ query: () => "client/customers" }),
    provideTags: ["User", "Products"],
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
  api;
