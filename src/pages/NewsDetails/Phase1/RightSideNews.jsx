const RightSideNews = () => {
    return (
       <div className="flex justify-end w-full">
         <div className="lg:max-w-[240px]">
            <p className="font-sans font-bold">Editor's Picks</p>
            <div className="h-[1px] bg-gray-300 my-4"></div>
            <div className="space-y-4">
                {/* card 1 */}
                <div className="flex items-center gap-4">
                    <img className="w-[75px] h-[75px]" src="https://static01.nyt.com/images/2025/08/30/business/30adviser/30adviser-thumbLarge.png" alt="" />
                    <p className="text-sm">How to Ship Your Car (and Why It May Save You Time and Money)</p>
                </div>
                {/* card 2 */}
                <div className="flex items-center gap-4">
                    <img className="w-[75px] h-[75px]" src="https://static01.nyt.com/images/2025/08/29/multimedia/29cul-cat-actor-cmtv/29cul-cat-actor-cmtv-thumbLarge.jpg" alt="" />
                    <p className="text-sm">This Star Has the Moxie and Acting Chops for a Crime Drama. He’s Also a Cat.</p>
                </div>
                {/* card 3 */}
                <div className="flex items-center gap-4">
                    <img className="w-[75px] h-[75px]" src="https://static01.nyt.com/images/2025/08/31/magazine/31mag-ethicist/31mag-ethicist-thumbLarge-v2.jpg" alt="" />
                    <p className="text-sm">A Troubled Colleague Asked For My Help. How Much Do I Have to Take On?</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default RightSideNews;