import HeadingTitleComponents from "../../../../components/ui/homeComponents/HeadingTitleComponents";

const RightSideNews = () => {
  return (
    <div className="lg:pt-9 lg:pl-4">
      <HeadingTitleComponents
        border={true}
        title={
          "Judge Rejects Saudi Arabia’s Attempt to Dismiss Lawsuit by 9/11 Families"
        }
        minutesRead={"3 min read"}
        titleSize={"text-base"}
        leadingTitle={"leading-[22px]"}
      />
      <HeadingTitleComponents
        border={true}
        title={
          "Fishermen Pulled In an Orange Shark Off Costa Rica: ‘My God, What Is This?’"
        }
        minutesRead={"3 min read"}
        titleSize={"text-base"}
        leadingTitle={"leading-[22px]"}
        className={'mt-3 lg:mt-0'}
      />
      <HeadingTitleComponents
        border={true}
        title={"Pediatric Brain Cancer Trial Group to Be Phased Out"}
        minutesRead={"4 min read"}
        titleSize={"text-base"}
        leadingTitle={"leading-[22px]"}
        className={'mt-3 lg:mt-0'}
      />
      <HeadingTitleComponents
        border={true}
        title={
          "Buried by Princess Diana, Time Capsule Brings Back the ’90s Far Too Soon"
        }
        minutesRead={"2 min read"}
        titleSize={"text-base"}
        leadingTitle={"leading-[22px]"}
        className={'mt-3 lg:mt-0'}
      />
      <HeadingTitleComponents
        border={true}
        title={
          "Former New York Yankees First Baseman Says He Will Run for Congress"
        }
        minutesRead={"3 min read"}
        titleSize={"text-base"}
        leadingTitle={"leading-[22px]"}
        className={'mt-3 lg:mt-0'}
      />
      <HeadingTitleComponents
        border={true}
        title={"Warming Waters Bring a Stinging Sea Slug to Spain’s Coasts"}
        minutesRead={"3 min read"}
        titleSize={"text-base"}
        leadingTitle={"leading-[22px]"}
        className={'mt-3 lg:mt-0'}
      />
    </div>
  );
};

export default RightSideNews;
