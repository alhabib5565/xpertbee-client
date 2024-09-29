import NoDataFound from "@/components/dashboard/DShared/NoDataFound";
import { Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";

const WithdrawPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Withdraw</h1>
      <div className="p-4 rounded-md border bg-white flex justify-between items-center flex-wrap gap-6">
        <div className="flex items-center gap-4">
          <span className="size-[60px] rounded-full bg-[#FFF9EC] text-primary grid place-items-center">
            <Wallet />
          </span>
          <div>
            <p className="text-[16px] font-medium text-[#757C8E]">
              Current Balance is ৳ 0.00
            </p>
            <p className="text-lg font-medium text-[#757C8E]">
              You have <b>৳ 0.00</b> and this is insufficient balance to
              withdraw
            </p>
          </div>
        </div>
      </div>
      <p className=" text-sm text-slate-500">
        You can change your{" "}
        <Link
          className="text-primary"
          href="/dashboard/settings/withdraw-settings"
        >
          Withdraw Preference
        </Link>
      </p>
      <NoDataFound />
    </div>
  );
};

export default WithdrawPage;
