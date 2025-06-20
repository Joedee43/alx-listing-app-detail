// pages/property/[id].tsx

import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import Head from "next/head";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the property by its name. In a real app, you'd fetch this from an API using the id.
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.name.replace(/\s+/g, '-') === (id as string)?.replace(/\s+/g, '-')
  );

  if (router.isFallback || !property) {
    return <p className="text-center text-xl mt-12">Loading property or property not found...</p>;
  }

  return (
    <>
        <Head>
            <title>{property.name} - Listing App</title>
            <meta name="description" content={property.description.substring(0, 150)} />
        </Head>
        <main>
            <PropertyDetail property={property} />
        </main>
    </>
  );
}