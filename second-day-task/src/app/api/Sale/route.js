export async function GET() {
  const products = [
    {
      id: 1,
      pname: "BlendMaster Elite Fusionator",
      discount: 33,
      price: 299,
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&w=828&q=50",
      description: "Because ordinary blenders are for the common folk. With the BlendMaster, you can effortlessly mix your pretentious smoothies and soups while feeling like a culinary genius. It's not just a blender; it's a status symbol in the world of haute cuisine.",
      options: {
        Plug: ["EU", "US", "UK"]
      },
      info: {},
      route: "blend-master-elite-fusionator"
    },
    {
      id: 2,
      pname: "Corporate Commando Throne",
      discount: 8,
      price: 600,
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&w=828&q=50",
      description: "Introducing the Exorbita Elegance Elite watch, now available with the option of kinetic movement technology. Immerse yourself in timeless elegance and never worry about battery changes again. Discover the perfect blend of style and innovation.",
      options: {
        Adjustability: ["Height", "Height + Tilt"],
      },
      info: {},
      route: "corporate-commando-throne"
    },
    {
      id: 3,
      pname: "Decibel Dominator Deluxe",
      discount: 20,
      price: 249,
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&w=828&q=75",
      description: "Introducing the mighty Decibel Dominator Deluxe clock radio alarm! Experience its seamless Bluetooth connectivity and crystal-clear DAB+ radio. Rise and shine in style!",
      options: {
        color: ["Black", "White", "Yellow"],
      },
      info: {},
      route: "decibel-dominator-deluxe"

    },
  ];

  return Response.json(products);
}