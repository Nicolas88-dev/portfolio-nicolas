export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className=" overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl ">
        <div className="py-8 px-4">
          <Icon size={40} className="text-[#55E6A5] mb-4" />
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <p className="text-xl">{service.description}</p>
        </div>
    </div>
  );
}
