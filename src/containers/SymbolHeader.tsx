"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { SymbolSymbolProps } from "@/app/symbol/[symbol]/page";
import getLastTrade from "@/core/api/getLastTrade";

// Playground component
function SymbolHeader() {
  const params = useParams<SymbolSymbolProps>();

  // this will be preloaded on the server so its instantly available when the user lands on the page
  // then it will refetch every 3 seconds
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getLastTrade(params.symbol),
    refetchInterval: 3000,
  });

  return (
    <>
      <h1>{data?.symbol}</h1>
      <h1>{data?.price}</h1>
    </>
  );
}

export default SymbolHeader;
