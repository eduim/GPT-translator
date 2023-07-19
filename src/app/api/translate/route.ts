import getTranslatedText from "@/lib/translation";

export async function POST(request: Request) {
  const { languageFrom, languageTo, text, traductionFormal } =
    await request.json();

  const response = await getTranslatedText(
    text,
    languageFrom,
    languageTo,
    traductionFormal
  );

  const traduction = response.data.choices[0].text;

  if (!traduction) {
    return new Response(traduction, {
      status: 500,
    });
  }

  return new Response(JSON.stringify(traduction.substring(2)));
}
