import HomeMainSection from "@/components/HomeMainSection";

export default function Home() {
  let mainSectionData = [
    {
      heading: "Latest Drops",
      actualPath: "/api/LatestDrops",
      route: "/collections/latest-drops"
    },
    {
      heading: "Weekly Picks",
      actualPath: "/api/WeeklyPicks",
      route: "/collections/weekly-picks"
    },
    {
      heading: "Sale",
      actualPath: "/api/Sale",
      route: "/collections/sale"
    }
  ];

  return (
    <>
      <div className="h-[70px]"> </div>
      <main
        className=
        {`
          z-[1]
          relative
          w-[100%]
          bg-white
          my-12
          flex
          flex-col
          items-center
        `}
      >
        {
          mainSectionData.map((section_v, index) => {
            return (
              <HomeMainSection key={index} id={index} heading={section_v.heading} actualPath={section_v.actualPath} route={section_v.route} />
            )
          })
        }
      </main>
    </>
  )
}
