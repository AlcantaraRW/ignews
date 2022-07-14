import { Client } from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = new Client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  prismic.enableAutoPreviewsFromReq(req);

  return prismic;
}
