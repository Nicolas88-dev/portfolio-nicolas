export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="flex flex-col items-center text-center text-black">
      <div className="flex h-35 w-28 items-center justify-center rounded-full border border-gray-200 bg-white text-black">
        <div className="flex flex-col items-center justify-center gap-2">
          <Icon size={34} className="text-black" />

          <span className="text-3xl font-bold text-[#55E6A5]">
            {skill.percentage}%
          </span>
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-black">
        {skill.title}
      </h3>
    </div>
  );
}