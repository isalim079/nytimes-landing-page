import HeadingTitleComponents from "../../../../components/ui/homeComponents/HeadingTitleComponents";
import ImageComponents from "../../../../components/ui/homeComponents/ImageComponents";
import SubHeadingTitleComponents from "../../../../components/ui/homeComponents/SubHeadingTitleComponents";

const Container3 = () => {
  return (
    <div className=" mt-3">
      {/* top section */}
      <div className="flex flex-row gap-7 font-sans text-sm px-4">
        <span className="font-semibold">Middle East Crisis</span>
        <span>Gaza Famine Report</span>
        <span>Israel’s Widening Offensive</span>
        <span>Fear in Gaza City</span>
        <span>West Bank Settlements</span>
      </div>
      {/* container section */}
      <div className="mt-2">
        <div className="grid grid-cols-12 p-4 gap-4">
          {/* left side data */}
          <div className="col-span-4">
            <HeadingTitleComponents
              border={true}
              title={
                "Macron, in Letter to Netanyahu, Defends Call for Palestinian Statehood"
              }
              subtitle={
                "The French president also pushed back against accusations by Israel’s leader that he had not done enough to protect French Jews from antisemitic attacks."
              }
              minutesRead={"4 min read"}
            />

            <SubHeadingTitleComponents
              border={true}
              className={"mt-3"}
              title={
                "Israel Says Hamas Placed Surveillance Camera in Hospital, Prompting Deadly Strike"
              }
            minutesRead={"4 min read"}
            />

            <SubHeadingTitleComponents
              border={true}
              className={"mt-3"}
              title={
                "Lebanon Is Near a Disarmament Plan for Hezbollah, U.S. Envoy Says"
              }
              minutesRead={"3 min read"}
            />
          </div>

          {/* right side data */}
          <div className="col-span-8 pl-4">
            <ImageComponents
              src="https://static01.nyt.com/images/2025/08/26/multimedia/26dc-power-01-qglz/26dc-power-01-qglz-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
              title={
                "The Deadly Risks of Reporting in Gaza"
              }
              subtitle={
                "Journalists endure the same harrowing reality as other Gazans: hunger and the threat of death. Those challenges risk further stifling information about the war."
              }
              minutesRead={"5 min read"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
