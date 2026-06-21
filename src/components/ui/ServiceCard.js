export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 text-black shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="px-4 py-8">
        <Icon size={40} className="mb-4 text-[#55E6A5]" />

        <h3 className="text-2xl font-bold text-black">
          {service.title}
        </h3>

        <p className="mt-2 text-xl leading-snug text-black/80">
          {service.description}
        </p>
      </div>
    </div>
  );
}