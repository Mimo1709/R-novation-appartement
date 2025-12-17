import Counter from './Counter';

export default function Stats() {
  const stats = [
    { value: 15, suffix: '+', label: "Années d'expérience" },
    { value: 4352, suffix: '+', label: 'Projets réalisés' },
    { value: 100, suffix: '%', label: 'Clients satisfaits' },
    { value: 10, suffix: ' ans', label: 'Garantie décennale' },
  ];
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <Counter
            key={index}
            end={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}