export const runtime = "nodejs";

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "GEMINI_API_KEY is missing" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1/models",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const data = await res.json();
    return new Response(JSON.stringify(data, null, 2), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Direct fetch error:", error);
    return new Response(JSON.stringify({ error: error.message }, null, 2), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
