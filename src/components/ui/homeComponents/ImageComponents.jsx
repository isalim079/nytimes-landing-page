const ImageComponents = ({
  containerClass,
  src,
  title,
  subtitle,
  minutesRead,
  photoCredits,
  imageHeight,
  titleFontSize,
  titleFontWeight,
  titleLeading,
}) => {
  return (
    <div className={`${containerClass}`}>
      <img className={`${imageHeight}`} src={`${src}`} alt="" />
      {photoCredits ? (
        <span className="text-gray-500 font-sans text-[10px] font-semibold flex justify-end mt-1">
          {photoCredits}
        </span>
      ) : (
        ""
      )}
      {title ? (
        <h3
          className={`${titleFontSize ? titleFontSize : "text-lg"} ${titleFontWeight ? titleFontWeight : "font-semibold"} ${titleLeading ? titleLeading : "leading-[26px]"} mt-4`}
        >
          {title}
        </h3>
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
    </div>
  );
};

export default ImageComponents;
