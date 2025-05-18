export async function GET() {
  const products = [
    {
      id: 1,
      pname: "Nebula Noir Hoodie",
      discount: 0,
      price: 199,
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&w=828&q=50",
      description: "Immerse yourself in cosmic fashion. Unveil the enigmatic allure of the Nebula Noir Hoodie. Embrace its cozy and durable charm. Elevate your style to celestial heights. Get yours today!",
      options: {
        size: ["S", "M", "L", "XL"],
      },
      info: {},
      route: "nebula-noir-hoodie"
    },
    {
      id: 2,
      pname: "Exorbita Elegence Elite",
      discount: 0,
      price: 1199,
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&w=828&q=50",
      description: "Introducing the Exorbita Elegance Elite watch, now available with the option of kinetic movement technology. Immerse yourself in timeless elegance and never worry about battery changes again. Discover the perfect blend of style and innovation.",
      options: {
        Wristband: ["Leather", "Aluminium"],
        Power: ["Battery", "Kinetic"],
      },
      info: {},
      route: "exorbita-elegence-elite"
    },
    {
      id: 3,
      pname: "Metallic Majesty Illuminator",
      discount: 0,
      price: 399,
      pthumbLink: "https://next.medusajs.com/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&w=828&q=75",
      description: "Exquisite steel design lamp. Sleek construction exudes elegance and modernity. Illuminate with style and sophistication. Elevate your decor effortlessly. Perfect for warm and inviting ambiance. Unleash your creativity. Experience steel in a new light.",
      options: {
        color: ["Black", "White"]
      },
      info: {
        material: "Steel"
      },
      route: "metallic-majesty-illuminator"

    },
  ];

  return Response.json(products);
}