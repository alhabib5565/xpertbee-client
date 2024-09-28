import Image from "next/image";
import React from "react";

const NoDataFound = () => {
  return (
    <div className="space-y-4 py-6">
      <Image
        className="mx-auto"
        width={824}
        height={240}
        src="https://xpertbee.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
        alt=""
      />
      <p className="text-center">No Data Available in this Section</p>
    </div>
  );
};

export default NoDataFound;
