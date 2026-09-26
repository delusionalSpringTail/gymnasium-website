import Image from 'next/image';

export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Workout Image */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Muscle Groups Pills */}
          <div className="flex flex-wrap gap-2 mb-3">
            {workout.muscleGroups.map((group, index) => (
              <span
                key={index}
                className="bg-[#a3e635] text-black font-semibold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-oswald font-bold text-lg text-white uppercase tracking-wide line-clamp-1">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="text-zinc-500 text-xs mt-1">
            {workout.equipment}
          </p>
        </div>
      </div>

      {/* Footer / Meta Stats */}
      <div className="px-5 pb-5 pt-1 border-t border-zinc-800/40 flex items-center gap-4 text-zinc-400 text-xs">
        {/* Duration */}
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{workout.duration} min</span>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
          <span>{workout.caloriesBurned} kcal</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 ml-auto">
          <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-zinc-300 font-medium">{workout.rating}</span>
        </div>
      </div>

    </div>
  );
}