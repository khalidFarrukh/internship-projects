import { products } from "../../data"

export async function GET(req, { params }) {
  const { collection } = params;
  const products_data = products.filter(item => item.collection === collection);
  //const product = products.find((item) => item.route === slug);


  if (!products_data) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return Response.json(products_data);
}