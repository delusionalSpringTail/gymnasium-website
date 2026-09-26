import { Workout } from "@/components/WorkoutCard";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IWorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getData = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutDetails = async ({ params }: IWorkoutDetailsProps) => {
  const { id } = await params;
  const workoutsData = await getData();

  const workout = workoutsData.find(
    (work: Workout) =>
      work.name.toLowerCase().split(" ").join("-") === id.toLowerCase()
  );

  if (!workout) {
    notFound();
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Large Image Container */}
        <div className="relative w-full aspect-square max-h-[550px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-2xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Workout Meta, Info Table & Action Buttons */}
        <div className="flex flex-col space-y-6">
          
          {/* Header Info */}
          <div>
            <h1 className="font-oswald font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide leading-tight">
              {workout.name}
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
              {workout.description}
            </p>

            {/* Muscle Group Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {workout.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#a3e635] text-black font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Specifications Table */}
          <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 divide-y divide-zinc-800/60 text-xs sm:text-sm">
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Equipment</span>
              <span className="text-white font-medium text-right">{workout.equipment}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Difficulty</span>
              <span className="text-white font-medium">{workout.difficulty}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Sets</span>
              <span className="text-white font-medium">{workout.sets}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Reps</span>
              <span className="text-white font-medium">{workout.reps}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Duration</span>
              <span className="text-white font-medium">{workout.duration} min</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Calories</span>
              <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 uppercase tracking-wider font-medium">Rating</span>
              <span className="text-white font-medium">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions List Section */}
          <div className="pt-2">
            <h2 className="font-oswald font-bold text-lg text-white uppercase tracking-wider mb-3">
              INSTRUCTIONS
            </h2>
            <ol className="space-y-2.5 text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-zinc-500 font-medium select-none">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="flex-1 inline-flex items-center justify-center gap-2 bg-[#a3e635] text-black font-oswald font-bold text-sm uppercase px-5 py-3 rounded-lg hover:bg-[#8ee011] transition-colors shadow-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add to today&apos;s plan
            </button>

            <button className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 font-medium text-sm px-5 py-3 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Save for later
            </button>
          </div>

        </div>

      </div>
    </main>
  );
};

export default WorkoutDetails;