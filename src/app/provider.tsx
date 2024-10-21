"use client";
// import AOS from "aos";
// import { useEffect } from "react";
import { Provider } from "react-wrap-balancer";

/** @param {import('react').PropsWithChildren<unknown>} */
export function BalancerProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return <Provider>{children}</Provider>;
}
