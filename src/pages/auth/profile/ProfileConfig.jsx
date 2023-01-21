import Profile from "./Profile";

export const ProfileConfig = {
  routes: [
    {
      path: "/pages/auth/profile",
      exact: true,
      component: Profile,
    },
  ],
};
