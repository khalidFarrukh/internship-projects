import { products } from "../../data"

export async function GET(req, { params }) {
  const { proute } = params;
  const product = products.find((item) => item.route === proute);

  if (!products_data) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return Response.json(products_data);
}