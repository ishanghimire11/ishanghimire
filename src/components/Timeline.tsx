import React from "react";
import { timelineContents } from "@/constants";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="pb-32 text-4xl lg:text-5xl xl:text-6xl font-medium text-center">
        Education and Experience
      </h2>
      <TimelineContent />
      <MobileTimeline />
    </div>
  );
};

export default Timeline;

// const TimelineDotsandLines = ({
//   isLast,
//   isFirst,
// }: {
//   isLast?: boolean;
//   isFirst?: boolean;
// }) => {
//   return (
//     <div
//       className={`bg-current w-2 flex flex-col items-center mx-8 opacity-80 ${
//         isLast && "h-fit"
//       }`}
//     >
//       <div
//         className={`h-8 w-8 bg-current rounded-full ${isLast && "-mb-1"} ${
//           isFirst && "-mt-1"
//         }`}
//       ></div>
//     </div>
//   );
// };

const TimelineDotsandLines = ({
  isLast,
  isFirst,
}: {
  isLast?: boolean;
  isFirst?: boolean;
}) => {
  return (
    <div
      className={`bg-current w-2 flex flex-col items-center mx-8 opacity-80 ${
        isLast && "h-fit"
      }`}
    >
      <div
        className={`h-8 w-8 bg-current rounded-full ${isLast && "-mb-1"} ${
          isFirst && "-mt-1"
        }`}
      ></div>
    </div>
  );
};

export const TimelineContent = () => {
  return (
    <div className="hidden md:block">
      {timelineContents.map((content, index) => {
        const { title, subtitle, date, isLast, isFirst } = content;
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex content-start ${
              isEven ? "flex" : "flex-row-reverse text-right"
            }`}
          >
            <div className={`w-80 px-8 mb-28`}>
              <h3 className="text-3xl">{title}</h3>
              <p>{subtitle}</p>
              <p>{date}</p>
            </div>
            {isFirst && <TimelineDotsandLines isFirst={true} />}
            {!isFirst && !isLast && <TimelineDotsandLines />}
            {isLast && <TimelineDotsandLines isLast={true} />}
            <div className="w-80 px-8 mb-28"></div>
          </div>
        );
      })}
    </div>
  );
};

export const MobileTimeline = () => {
  return (
    <div className="block md:hidden">
      {timelineContents.map((content, index) => {
        const { title, subtitle, date, isLast, isFirst } = content;
        const isEven = index % 2 === 0;

        return (
          <div key={index} className={`flex content-start`}>
            <div className={`w-48 sm:w-64 md:w-80 mb-28`}>
              <h3 className="text-2xl">{title}</h3>
              <p>{subtitle}</p>
              <p>{date}</p>
            </div>
            {isFirst && <TimelineDotsandLines isFirst={true} />}
            {!isFirst && !isLast && <TimelineDotsandLines />}
            {isLast && <TimelineDotsandLines isLast={true} />}
          </div>
        );
      })}
    </div>
  );
};
