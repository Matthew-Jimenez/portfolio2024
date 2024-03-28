import React, { Suspense } from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import SymbolHeader from "@/containers/SymbolHeader";
import RandomServerComponent from "@/containers/LongRunningServerComponent";
import getLastTrade from "@/core/api/getLastTrade";

export type SymbolSymbolProps = {
  symbol: string;
};

export default async function Page({
  params,
}: NextPageProps<SymbolSymbolProps>) {
  const queryClient = new QueryClient();

  // if this fails, then no data will be hyrdated on the client side
  // and the client component will attempt a refetch
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => getLastTrade(params?.symbol),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen flex-col items-center center p-3">
        <header>
          <SymbolHeader />
        </header>

        <section>
          <Suspense fallback={<div>Loading server component...</div>}>
            <RandomServerComponent />
          </Suspense>
        </section>
      </main>
    </HydrationBoundary>
  );
}
