import fire from "../../assets/fire-filled.svg";
import wallet from "../../assets/entypo_wallet.svg";

const Popular = () => {
  return (
    <div
      className="py-2 px-4
      w-fit
      inline-flex
      bg-red-100 text-red-500
      rounded-full
      text-sm font-medium
      gap-2.5"
    >
      <img src={fire} alt="" />
      Popular
    </div>
  );
};
const BestDeals = () => {
  return (
    <div
      className="py-2 px-4
      w-fit
      inline-flex
    bg-green-100 text-green-700
      rounded-full
      text-sm font-medium
      gap-2.5"
    >
      <img src={wallet} alt="" />
      Best Deals
    </div>
  );
};

export { Popular, BestDeals };
