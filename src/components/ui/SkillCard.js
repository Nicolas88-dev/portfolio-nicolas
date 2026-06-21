export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="flex flex-col items-center">
      <div className="group flex h-30 w-24 flex-col items-center justify-center rounded-full border border-gray-200 hover:border-[#55E6A5]">
        <Icon size={30} className="group-hover:text-[#55E6A5]"/>

        <p className="mt-4 text-2xl font-bold text-[#55E6A5]">
          {skill.percentage}%
        </p>
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {skill.title}
      </h3>
    </div>
  );
}