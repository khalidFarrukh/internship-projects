import { products } from "../../data"

export async function GET(req, context) {
  const { collection } = await context.params;
  const products_data = products.filter(item => item.collection === collection);
  //const product = products.find((item) => item.route === slug);


  if (!products_data) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(products_data), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}