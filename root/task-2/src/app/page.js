import HomeMainSection from "@/components/HomeMainSection";

export default function Home() {
  let mainSectionData = [
    {
      heading: "Latest Drops",
      collection: "latest-drops",
      route: "/collections/latest-drops"
    },
    {
      heading: "Weekly Picks",
      collection: "weekly-picks",
      route: "/collections/weekly-picks"
    },
    {
      heading: "Sale",
      collection: "sale",
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
              <HomeMainSection key={index} id={index} heading={section_v.heading} collection={section_v.collection} route={section_v.route} />
            )
          })
        }
      </main>
    </>
  )
}
