import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="flex flex-col h-[300px] items-center justify-center my-auto">
        <h2 className="text-4xl font-semibold">Manage your Content</h2>
        {/* <p>
          Create your content with your definded schemas, add team member and
          access the content through api endpoint
        </p> */}
        <Link
          href="/projects"
          className="mt-5 bg-blue-600 px-5 py-2 text-white rounded-md"
        >
          Start Managing
        </Link>
      </section>
    </>
  );
}
