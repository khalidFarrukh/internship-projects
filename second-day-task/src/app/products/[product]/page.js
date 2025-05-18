import ProductMainSection from "@/components/ProductMainSection";

export default async function Product({ params }) {

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
              lg:my-6
              flex
              flex-col
              items-center
            `}
      >
        {
          mainSectionData.map((section_v, index) => {
            return (
              <ProductMainSection key={index} product={params.product} />
            )
          })
        }
      </main>
    </>
  )
}