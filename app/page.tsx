import dynamic from "next/dynamic";
import Layout from "./ui/components/Layout/Layout";

const MainDash = dynamic(
  () => {
    return import("./ui/components/MainDash");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <Layout>
      <MainDash />
    </Layout>
  );
}
