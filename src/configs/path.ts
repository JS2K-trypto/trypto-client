const path = {
  HOME: "/",

  /* plans */
  PLANS: "/plans",
  PLANS_ID: "/plans/:id",
  /* community */
  COMMUNITY: "/community",
  COMMUNITY_ID: "/community/:id",
  /* badge */
  BADGE: "/badges",
  BADGE_ISSUE: "/badges/issue",
} as const;

export default path;
