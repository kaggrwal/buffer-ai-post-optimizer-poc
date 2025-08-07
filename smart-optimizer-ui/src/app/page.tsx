// app/page.tsx
import OptimizerForm from '@/components/OptimizerForm';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Smart Post Optimizer</h1>
      <OptimizerForm />
    </main>
  );
}

