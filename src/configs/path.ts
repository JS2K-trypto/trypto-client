const path = {
  HOME: "/",

  AUTH: "/auth",

  /* plans */
  PLANS: "/plans",
  PLANS_ID: "/plans/:id",
  PLANS_EDIT: "/plans/:id/edit",
} as const;

export default path;
