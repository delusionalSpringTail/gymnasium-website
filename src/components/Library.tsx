import WorkoutCard, { Workout } from '@/components/WorkoutCard';

const getData = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const LibraryPage = async () => {
  const workoutsData = await getData();

  return (
    <section id="library" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* header and discription */}
      <div className="mb-8">
        <h1 className="font-oswald text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
          THE LIBRARY
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base mt-1">
          {workoutsData.length} lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutsData.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
        ))}
      </div>
    </section>
  );
};

export default LibraryPage;