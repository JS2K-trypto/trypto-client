import PageContainer from "@/components/common/PageContainer";
import DaySchedule from "@/components/plans/DaySchedule";
import React from "react";

export default function CommunityPage() {
  return (
    <PageContainer title="Trip to Da Nang" subTitle="2023.0.00">
      <ul>
        {Array.from(Array(10)).map((v, i) => (
          <li key={i} className="mb-5">
            <DaySchedule />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
