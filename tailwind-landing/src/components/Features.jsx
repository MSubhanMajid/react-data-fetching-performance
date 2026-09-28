import FeatureCard from "./FeatureCard";

const features = [
  {
    emoji: "📋",
    title: "Task Boards",
    description: "Organize work visually with drag-and-drop boards.",
  },
  {
    emoji: "⚡",
    title: "Fast Sync",
    description: "Real-time updates across your whole team, instantly.",
  },
  {
    emoji: "🔒",
    title: "Secure by Default",
    description: "Your data is encrypted end-to-end, always.",
  },
];

function Features() {
  return (
    <section className="px-6 py-12 md:px-12">
      <h2 className="text-center text-3xl font-bold text-gray-900">
        Why teams choose DevBoard
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
