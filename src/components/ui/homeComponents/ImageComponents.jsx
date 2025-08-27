const ImageComponents = ({
  containerClass,
  src,
  title,
  subtitle,
  minutesRead,
  photoCredits,
}) => {
  return (
    <div className={`${containerClass}`}>
      <img src={`${src}`} alt="" />
      {title ? (
        <h3 className="text-lg font-semibold leading-[26px] mt-4">{title}</h3>
      ) : (
        ""
      )}
      {subtitle ? (
        <p className="text-gray-500 mt-2 leading-tight">{subtitle}</p>
      ) : (
        ""
      )}
      {minutesRead ? (
        <span className="text-gray-500 uppercase font-sans text-[10px] font-semibold">
          {minutesRead}
        </span>
      ) : (
        ""
      )}
      {photoCredits ? (
        <span className="text-gray-500 font-sans text-[10px] font-semibold flex justify-end mt-1">
          {photoCredits}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageComponents;
