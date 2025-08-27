import { ChevronRight } from "lucide-react";

const SubHeadingTitleComponents = ({border, className, title, updates, minutesRead}) => {
    return (
        <div className={`${className} ${border ? 'border-b-2 border-b-gray-200 pb-3' : ''}`}>
          <h3 className="text-lg font-semibold leading-[26px]">
           {title}
          </h3>
          {updates ? <span className="flex items-center gap-1 mt-1 text-gray-600">
            See more updates <ChevronRight className="w-3 pt-1" />
          </span> : ''}
          {minutesRead ? <span className="text-gray-500 uppercase font-sans text-[10px] font-semibold">
            {minutesRead}
          </span> : ''}
        </div>
    );
};

export default SubHeadingTitleComponents;