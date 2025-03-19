import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            signUp: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/users/create-user`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            login: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/login`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            forgetPassword: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/forget-password`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            verifyOtp: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/verify-otp`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            resendOtp: builder.mutation({
                  query: (payload) => {
                        return {
                              url: `/auth/resend-otp`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
            resetPassword: builder.mutation({
                  query: ({ payload, token }) => {
                        return {
                              url: `/auth/reset-password`,
                              method: 'POST',
                              body: payload,
                              headers: {
                                    Authorization: `${token}`,
                              },
                        };
                  },
            }),
            changePassword: builder.mutation({
                  query: ({ payload }) => {
                        return {
                              url: `/auth/change-password`,
                              method: 'POST',
                              body: payload,
                        };
                  },
            }),
      }),
});

export const {
      useSignUpMutation,
      useLoginMutation,
      useForgetPasswordMutation,
      useVerifyOtpMutation,
      useResendOtpMutation,
      useResetPasswordMutation,
      useChangePasswordMutation,
} = authApi;
