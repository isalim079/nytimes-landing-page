const HeadingTitleComponents = ({
  border,
  title,
  subtitle,
  minutesRead,
  className,
  titleSize,
  leadingTitle,
}) => {
  return (
    <div
      className={`${border ? "border-b-2 border-b-gray-200 pb-3" : ""} ${className}`}
    >
      <h3
        className={`${titleSize ? titleSize : "text-xl"} font-semibold ${leadingTitle ? leadingTitle : "leading-[28px]"}`}
      >
        {title}
      </h3>
      {subtitle ? <p className="mt-3 text-gray-500 leading-tight">{subtitle}</p> : ''}
      <span className="text-gray-500 uppercase font-sans text-[10px] font-semibold">
        {minutesRead}
      </span>
    </div>
  );
};

export default HeadingTitleComponents;
