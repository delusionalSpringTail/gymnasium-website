export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#ccff00]/10" />

        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#ccff00] border-r-[#ccff00]/40" />

        <div className="h-2.5 w-2.5 rounded-full bg-[#ccff00] shadow-[0_0_18px_rgba(204,255,0,0.7)]" />
      </div>
    </div>
  );
}