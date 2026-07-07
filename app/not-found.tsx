import { notFoundMetadata } from "@/lib/metadata";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = notFoundMetadata;

export default function NotFound() {
  return (
    <main className="flex min-h-dvh min-w-0 flex-col items-center justify-center px-6">
      <div className="glass w-full max-w-md p-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-graphite-500">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-graphite-50">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-graphite-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            <ArrowLeft size={16} aria-hidden />
            Back to home
          </Button>
        </div>
      </div>
    </main>
  );
}
