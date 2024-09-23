"use client";
import { Provider } from "react-wrap-balancer";
import AOS from "aos";
import { useEffect } from "react";

/** @param {import('react').PropsWithChildren<unknown>} */
export function BalancerProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Provider>{children}</Provider>;
}
