import React from "react";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";

const Transactions = () => {
  return (
    <section className="p-8">
      <h1 className="text-xl pb-4">Transactions | This Month</h1>

      <div className="bg-white p-6">
        <div className="flex justify-start mb-3">
          <div className="mr-auto bg-transparent border border-[#D9D9D9] flex items-center gap-2 w-[400px] rounded-sm py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1_3205)">
                <path
                  d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25404 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                  fill="#999999"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3205">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              className="bg-transparent border-none outline-none min-w-24"
              type="text"
              placeholder="Search By Order ID..."
            />
          </div>

          <div className="flex gap-3 ">
            <div className="bg-transparent border border-[#D9D9D9] flex items-center w-auto rounded-md p-3">
              <p className="mr-1 text-sm">Sort</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="flex items-center"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.62288 9.93366C1.83116 9.72538 2.16885 9.72538 2.37713 9.93366L4.64088 12.1974L6.90462 9.93366C7.1129 9.72538 7.45059 9.72538 7.65887 9.93366C7.86715 10.1419 7.86715 10.4796 7.65887 10.6879L5.018 13.3288C4.80972 13.5371 4.47203 13.5371 4.26375 13.3288L1.62288 10.6879C1.4146 10.4796 1.4146 10.1419 1.62288 9.93366Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.64083 2.51506C4.93538 2.51506 5.17416 2.75384 5.17416 3.04839L5.17416 12.9516C5.17416 13.2462 4.93538 13.485 4.64083 13.485C4.34628 13.485 4.1075 13.2462 4.1075 12.9516L4.1075 3.04839C4.1075 2.75384 4.34628 2.51506 4.64083 2.51506Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3771 6.06637C14.1688 6.27465 13.8311 6.27465 13.6229 6.06637L11.3591 3.80262L9.09538 6.06637C8.8871 6.27465 8.54941 6.27465 8.34113 6.06637C8.13285 5.85809 8.13285 5.5204 8.34113 5.31212L10.982 2.67125C11.1903 2.46298 11.528 2.46298 11.7362 2.67125L14.3771 5.31212C14.5854 5.5204 14.5854 5.85809 14.3771 6.06637Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3592 13.485C11.0646 13.485 10.8258 13.2462 10.8258 12.9516L10.8258 3.04838C10.8258 2.75383 11.0646 2.51505 11.3592 2.51505C11.6537 2.51505 11.8925 2.75383 11.8925 3.04838L11.8925 12.9516C11.8925 13.2462 11.6537 13.485 11.3592 13.485Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
            <div className="bg-transparent border border-[#D9D9D9] flex w-auto rounded-md p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
          </div>
        </div>
        <TransactionTable />
        <Pagination />
      </div>
    </section>
  );
};

export default Transactions;