function FeatureCard({ title, description, emoji }) {
  return (
    <div className="rounded-xl border border-gray-100 p-6 shadow-sm transition hover:shadow-lg">
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
