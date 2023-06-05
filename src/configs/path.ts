const path = {
  HOME: "/",

  AUTH: "/auth",

  /* plans */
  PLANS: "/plans",
  PLANS_ID: "/plans/:id",
  PLANS_EDIT: "/plans/:id/edit",
  /* community */
  COMMUNITY: "/community",
  COMMUNITY_ID: "/community/:id",
  /* badge */
  BADGE: "/badges",
  BADGE_ISSUE: "/badges/issue",
} as const;

export default path;
