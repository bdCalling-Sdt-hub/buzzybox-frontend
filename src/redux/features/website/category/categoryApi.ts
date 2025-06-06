import { baseApi } from '@/redux/api/baseApi';

const categoryApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getCategories: builder.query({
                  query: () => {
                        return {
                              url: `/categories`,
                              method: 'GET',
                        };
                  },
            }),
      }),
});

export const { useGetCategoriesQuery } = categoryApi;
