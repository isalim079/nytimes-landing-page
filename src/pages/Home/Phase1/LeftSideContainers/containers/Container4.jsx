import HeadingTitleComponents from "../../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../../components/ui/homeComponents/ImageComponents";

const Container4 = () => {
  return (
    <div className="grid grid-cols-12 p-4 gap-4 mt-2">
      {/* left side data */}
      <div className="lg:col-span-4 col-span-12">
        <HeadingTitleComponents
          title={
            "Nigel Farage Promises Mass Deportations if Elected U.K. Prime Minister"
          }
          subtitle={
            "The plans illustrated how the leader of the Reform U.K. Party is driving a hardening of the debate around immigration."
          }
          minutesRead={"5 min read"}
        />
      </div>

      {/* right side data */}
      <div className="lg:col-span-8 col-span-12 pl-4">
        <ImageComponents
          src="https://static01.nyt.com/images/2025/09/10/multimedia/10int-uk-reform-deportations-1-hfql/10int-uk-reform-deportations-1-hfql-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
          photoCredits={"Joanna Chan/Associated Press"}
        />
      </div>
    </div>
  );
};

export default Container4;
