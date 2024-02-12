import Card from "@/components/card/card";

export default function ProjectPage() {
  return (
    <>
      <div className="px-4 pt-8 max-w-screen-xl mx-auto w-full">
        <h1 className="text-7xl mb-8">Code Canvas</h1>
        <div className="flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
