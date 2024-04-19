// Assuming SITE_ROUTES is imported correctly
import React from "react";
import Link from "next/link";
import { SITE_ROUTES } from "@/components/SiteMapPage/constants";

const SiteMap = () => {
  // Simplified version, assuming headerFooterData structure and usage remain unchanged
  return (
    <div className="w-full flex items-center justify-center">
      <div className="mt-20 lg:px-0 pt-4 pb-20 max-w-[360px] lg:max-w-screen-2k flex flex-col gap-5 lg:grid lg:grid-cols-2">
        {/* Simplified rendering based on static SITE_ROUTES only */}
        <div className="p-5 border w-full h-max">
          <h2 className="text-lg font-bold">Routes</h2>
          <ul className="flex flex-col text-xs">
            {Array.isArray(SITE_ROUTES) &&
              SITE_ROUTES.map((data) => (
                <li key={data.id} className="py-1">
                  <Link
                    href={data.path}
                    className="text-[#337ab7] hover:underline"
                  >
                    {data.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
