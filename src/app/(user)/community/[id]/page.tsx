import PageContainer from "@/components/common/PageContainer";
import CDaySchedule, { DayProps } from "@/components/community/CDaySchedule";
import axios from "axios";
import React from "react";
interface CommunityPageProps {
  params: {
    id: string;
  };
}

const CommunityPage = async (props: CommunityPageProps) => {
  const res = await axios.get("http://152.69.231.140:1323/v01/trip/allplan");
  const number = parseInt(props.params.id);
  const plan = res.data[number - 1];
  console.log("data  ", plan);

  return (
    <PageContainer
      title={plan.triptitle}
      subTitle={
        plan.tripdeparture.split(" ")[0] + "-" + plan.triparrival.split(" ")[0]
      }
    >
      <ul>
        {/* {Array.from(Array(10)).map((v, i) => (
          <li key={i} className="mb-5">
            <CDaySchedule />
          </li>
        ))} */}
        {plan.dayitems.map((day: DayProps, idx: number) => {
          console.log("key from page: ", day);
          return (
            <li key={idx} className="mb-5">
              <CDaySchedule day={day} idx={idx} />
            </li>
          );
        })}
      </ul>
    </PageContainer>
  );
};
export default CommunityPage;
