import Button from "@/components/common/Button";
import Badge from "../../../components/badges/Badge";

const Issue = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-40 pt-10">
        <Badge />
      </div>
      <div className="font-bold text-5xl  py-10">Congratulations</div>
      <Button className="px-20 m-10">Your Badges</Button>
    </div>
  );
};

export default Issue;
