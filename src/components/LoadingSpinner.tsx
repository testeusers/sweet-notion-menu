export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-muted"></div>
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent absolute top-0 animate-spin"></div>
      </div>
    </div>
  );
}