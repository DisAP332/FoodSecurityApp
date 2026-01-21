import type { ReactNode } from "react";

type QuestionCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function QuestionCard({
  title,
  description,
  children,
}: QuestionCardProps) {
  return (
    <section className="rounded-xl bg-white p-4 shadow-sm space-y-4">
      <header className="space-y-1">
        <h2 className="text-lg font-medium text-slate-900">{title}</h2>
        {description && <p className="text-sm text-slate-600">{description}</p>}
      </header>

      <div>{children}</div>
    </section>
  );
}
