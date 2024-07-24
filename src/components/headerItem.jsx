import React from "react";

const HeaderItem = ({ label, Icon, labelHide }) => {
  return (
    <>
      <div className="text-xs flex items-center hover:underline hover:text-gray-100 underline-offset-4 transition-all">
        <div className="hover:size-4">
          <Icon />
        </div>

        <div className={`${labelHide} md:block`}>{label}</div>
      </div>
    </>
  );
};

export default HeaderItem;
