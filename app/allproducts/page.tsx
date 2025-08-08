import React from "react";

type Props = {};

const AllProducts = (props: Props) => {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm gap-6">
          {/* LEFT */}
          <div className="flex-1">left</div>

          {/* RIGHT */}
          <div className="flex-3">right</div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
