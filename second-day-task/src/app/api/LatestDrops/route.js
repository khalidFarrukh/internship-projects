export async function GET() {
  const products = [
    {
      id: 1,
      pname: "Audio Arrogance AuralElite",
      discount: "0",
      price: "249",
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&w=828&q=50",
      description: "Immerse in audio with the Audio Arrogance AuralElite Bluetooth headphones. Enjoy Active Noise Cancellation (ANC) for immersive experience. Indulge in flawless sound.",
      options: {
        color: ["Black", "Silver"],
        noise_canceling: ["ANC", "None"]
      },
      info: {}
    },
    {
      id: 2,
      pname: "Pinnacle Posh Pack",
      discount: "0",
      price: "405",
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&w=828&q=50",
      description: "Elevate your travel experience with the luxurious Pinnacle Posh Pack. Crafted from genuine leather, this stylish backpack is tailor-made for modern adventurers. It's handmade, durable, and exudes a touch of sophistication. Upgrade your travel game today!",
      options: {
        color: ["Black", "White"],
      },
      info: {
        material: "Leather"
      }
    },
    {
      id: 3,
      pname: "Vinyl Virtuoso Opulenza",
      discount: "0",
      price: "899",
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&w=828&q=50",
      description: "Immerse in audio with the Audio Arrogance AuralElite Bluetooth headphones. Enjoy Active Noise Cancellation (ANC) for immersive experience. Indulge in flawless sound.",
      options: {
        color: ["Black", "White"]
      },
      info: {
        material: "Aluminium",
        weight: "80 g",
        Country_of_origin: "DK",
        Dimensions: "33L x 65W x 16H"
      }

    },
  ];

  return Response.json(products);
}