import { PageSelector } from "@/components/forms/PageSelector";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-montserrat">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between pt-21">
        <PageSelector />
      </main>
    </div>
  );
}
