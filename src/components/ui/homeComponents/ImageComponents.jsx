const ImageComponents = ({containerClass, src, title, subtitle, minutesRead}) => {
  return (
    <div className={`${containerClass}`}>
      <img
        src={`${src}`}
        alt=""
      />
      <h3 className="text-lg font-semibold leading-[26px] mt-4">
        {title}
      </h3>
      <p className="text-gray-500 mt-2 leading-tight">
       {subtitle}
      </p>
      <span className="text-gray-500 uppercase font-sans text-[10px] font-semibold">
        {minutesRead}
      </span>
    </div>
  );
};

export default ImageComponents;
