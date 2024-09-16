import React from "react";
import * as AiIcons from "react-icons/ai";

const sideBarData = [
  {
    title: "overview",
    to: "/dashboard",
    // icon: <AiIcons.AiFillHome />,
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0402 6.81969L14.2802 2.78969C12.7102 1.68969 10.3002 1.74969 8.79023 2.91969L3.78023 6.82969C2.78023 7.60969 1.99023 9.20969 1.99023 10.4697V17.3697C1.99023 19.9197 4.06023 21.9997 6.61023 21.9997H17.3902C19.9402 21.9997 22.0102 19.9297 22.0102 17.3797V10.5997C22.0102 9.24969 21.1402 7.58969 20.0402 6.81969ZM12.7502 17.9997C12.7502 18.4097 12.4102 18.7497 12.0002 18.7497C11.5902 18.7497 11.2502 18.4097 11.2502 17.9997V14.9997C11.2502 14.5897 11.5902 14.2497 12.0002 14.2497C12.4102 14.2497 12.7502 14.5897 12.7502 14.9997V17.9997Z"
          fill="white"
        ></path>
      </svg>
    ),
    inactiveIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
          fill="#999999"
        ></path>
        <path
          d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
          fill="#999999"
        ></path>
      </svg>
    ),
    subItem: [
      {
        title: "Expenses",
        to: "/expensetracker",
        icon: <AiIcons.AiFillHome />
      },
      {
        title: "Habits",
        to: "/habits",
        icon: <AiIcons.AiFillHome />
      },
      {
        title: "CatchUp",
        to: "/catchup",
        icon: <AiIcons.AiFillHome />
      },
      {
        title: "Timers",
        to: "/dashboard",
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: "Profile",
    to: "/profile",
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
          fill="white"
        ></path>
        <path
          d="M17.0809 14.1499C14.2909 12.2899 9.74094 12.2899 6.93094 14.1499C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1299 18.3409 14.9899 17.0809 14.1499Z"
          fill="white"
        ></path>
      </svg>
    ),
    inactiveIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z"
          fill="#999999"
        ></path>
        <path
          d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
          fill="#999999"
        ></path>
      </svg>
    )
  },
  {
    title: "Settings",
    to: "/settings",
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.1 9.22043C18.29 9.22043 17.55 7.94042 18.45 6.37042C18.97 5.46042 18.66 4.30042 17.75 3.78042L16.02 2.79042C15.23 2.32042 14.21 2.60042 13.74 3.39042L13.63 3.58042C12.73 5.15042 11.25 5.15042 10.34 3.58042L10.23 3.39042C9.78 2.60042 8.76 2.32042 7.97 2.79042L6.24 3.78042C5.33 4.30042 5.02 5.47042 5.54 6.38042C6.45 7.94042 5.71 9.22043 3.9 9.22043C2.86 9.22043 2 10.0704 2 11.1204V12.8804C2 13.9204 2.85 14.7804 3.9 14.7804C5.71 14.7804 6.45 16.0604 5.54 17.6304C5.02 18.5404 5.33 19.7004 6.24 20.2204L7.97 21.2104C8.76 21.6804 9.78 21.4004 10.25 20.6104L10.36 20.4204C11.26 18.8504 12.74 18.8504 13.65 20.4204L13.76 20.6104C14.23 21.4004 15.25 21.6804 16.04 21.2104L17.77 20.2204C18.68 19.7004 18.99 18.5304 18.47 17.6304C17.56 16.0604 18.3 14.7804 20.11 14.7804C21.15 14.7804 22.01 13.9304 22.01 12.8804V11.1204C22 10.0804 21.15 9.22043 20.1 9.22043ZM12 15.2504C10.21 15.2504 8.75 13.7904 8.75 12.0004C8.75 10.2104 10.21 8.75042 12 8.75042C13.79 8.75042 15.25 10.2104 15.25 12.0004C15.25 13.7904 13.79 15.2504 12 15.2504Z"
          fill="white"
        ></path>
      </svg>
    ),
    inactiveIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
          fill="#999999"
        ></path>
        <path
          d="M15.21 22.1903C15 22.1903 14.79 22.1603 14.58 22.1103C13.96 21.9403 13.44 21.5503 13.11 21.0003L12.99 20.8003C12.4 19.7803 11.59 19.7803 11 20.8003L10.89 20.9903C10.56 21.5503 10.04 21.9503 9.42 22.1103C8.79 22.2803 8.14 22.1903 7.59 21.8603L5.87 20.8703C5.26 20.5203 4.82 19.9503 4.63 19.2603C4.45 18.5703 4.54 17.8603 4.89 17.2503C5.18 16.7403 5.26 16.2803 5.09 15.9903C4.92 15.7003 4.49 15.5303 3.9 15.5303C2.44 15.5303 1.25 14.3403 1.25 12.8803V11.1203C1.25 9.66029 2.44 8.47029 3.9 8.47029C4.49 8.47029 4.92 8.30029 5.09 8.01029C5.26 7.72029 5.19 7.26029 4.89 6.75029C4.54 6.14029 4.45 5.42029 4.63 4.74029C4.81 4.05029 5.25 3.48029 5.87 3.13029L7.6 2.14029C8.73 1.47029 10.22 1.86029 10.9 3.01029L11.02 3.21029C11.61 4.23029 12.42 4.23029 13.01 3.21029L13.12 3.02029C13.8 1.86029 15.29 1.47029 16.43 2.15029L18.15 3.14029C18.76 3.49029 19.2 4.06029 19.39 4.75029C19.57 5.44029 19.48 6.15029 19.13 6.76029C18.84 7.27029 18.76 7.73029 18.93 8.02029C19.1 8.31029 19.53 8.48029 20.12 8.48029C21.58 8.48029 22.77 9.67029 22.77 11.1303V12.8903C22.77 14.3503 21.58 15.5403 20.12 15.5403C19.53 15.5403 19.1 15.7103 18.93 16.0003C18.76 16.2903 18.83 16.7503 19.13 17.2603C19.48 17.8703 19.58 18.5903 19.39 19.2703C19.21 19.9603 18.77 20.5303 18.15 20.8803L16.42 21.8703C16.04 22.0803 15.63 22.1903 15.21 22.1903ZM12 18.4903C12.89 18.4903 13.72 19.0503 14.29 20.0403L14.4 20.2303C14.52 20.4403 14.72 20.5903 14.96 20.6503C15.2 20.7103 15.44 20.6803 15.64 20.5603L17.37 19.5603C17.63 19.4103 17.83 19.1603 17.91 18.8603C17.99 18.5603 17.95 18.2503 17.8 17.9903C17.23 17.0103 17.16 16.0003 17.6 15.2303C18.04 14.4603 18.95 14.0203 20.09 14.0203C20.73 14.0203 21.24 13.5103 21.24 12.8703V11.1103C21.24 10.4803 20.73 9.96029 20.09 9.96029C18.95 9.96029 18.04 9.52029 17.6 8.75029C17.16 7.98029 17.23 6.97029 17.8 5.99029C17.95 5.73029 17.99 5.42029 17.91 5.12029C17.83 4.82029 17.64 4.58029 17.38 4.42029L15.65 3.43029C15.22 3.17029 14.65 3.32029 14.39 3.76029L14.28 3.95029C13.71 4.94029 12.88 5.50029 11.99 5.50029C11.1 5.50029 10.27 4.94029 9.7 3.95029L9.59 3.75029C9.34 3.33029 8.78 3.18029 8.35 3.43029L6.62 4.43029C6.36 4.58029 6.16 4.83029 6.08 5.13029C6 5.43029 6.04 5.74029 6.19 6.00029C6.76 6.98029 6.83 7.99029 6.39 8.76029C5.95 9.53029 5.04 9.97029 3.9 9.97029C3.26 9.97029 2.75 10.4803 2.75 11.1203V12.8803C2.75 13.5103 3.26 14.0303 3.9 14.0303C5.04 14.0303 5.95 14.4703 6.39 15.2403C6.83 16.0103 6.76 17.0203 6.19 18.0003C6.04 18.2603 6 18.5703 6.08 18.8703C6.16 19.1703 6.35 19.4103 6.61 19.5703L8.34 20.5603C8.55 20.6903 8.8 20.7203 9.03 20.6603C9.27 20.6003 9.47 20.4403 9.6 20.2303L9.71 20.0403C10.28 19.0603 11.11 18.4903 12 18.4903Z"
          fill="#999999"
        ></path>
      </svg>
    )
  },
  {
    title: "Logout",
    to: "/logout",
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2405 22.2705H15.1105C10.6705 22.2705 8.5305 20.5205 8.1605 16.6005C8.1205 16.1905 8.4205 15.8205 8.8405 15.7805C9.2405 15.7405 9.6205 16.0505 9.6605 16.4605C9.9505 19.6005 11.4305 20.7705 15.1205 20.7705H15.2505C19.3205 20.7705 20.7605 19.3305 20.7605 15.2605V8.74047C20.7605 4.67047 19.3205 3.23047 15.2505 3.23047H15.1205C11.4105 3.23047 9.9305 4.42047 9.6605 7.62047C9.6105 8.03047 9.2605 8.34047 8.8405 8.30047C8.4205 8.27047 8.1205 7.90047 8.1505 7.49047C8.4905 3.51047 10.6405 1.73047 15.1105 1.73047H15.2405C20.1505 1.73047 22.2505 3.83047 22.2505 8.74047V15.2605C22.2505 20.1705 20.1505 22.2705 15.2405 22.2705Z"
          fill="currentColor"
        ></path>
        <path
          d="M14.9991 12.75H3.61914C3.20914 12.75 2.86914 12.41 2.86914 12C2.86914 11.59 3.20914 11.25 3.61914 11.25H14.9991C15.4091 11.25 15.7491 11.59 15.7491 12C15.7491 12.41 15.4091 12.75 14.9991 12.75Z"
          fill="currentColor"
        ></path>
        <path
          d="M5.84945 16.0998C5.65945 16.0998 5.46945 16.0298 5.31945 15.8798L1.96945 12.5298C1.67945 12.2398 1.67945 11.7598 1.96945 11.4698L5.31945 8.11984C5.60945 7.82984 6.08945 7.82984 6.37945 8.11984C6.66945 8.40984 6.66945 8.88984 6.37945 9.17984L3.55945 11.9998L6.37945 14.8198C6.66945 15.1098 6.66945 15.5898 6.37945 15.8798C6.23945 16.0298 6.03945 16.0998 5.84945 16.0998Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  }
];

export default sideBarData;
