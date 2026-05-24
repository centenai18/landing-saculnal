import { Key } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-red rounded-lg blur-md opacity-50" />
        <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-red-glow to-red-deep grid place-items-center shadow-glow">
          <Key className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
      </div>
      <span className="font-display font-semibold text-ink text-lg tracking-tight">
        SacuLnaI
      </span>
    </div>
  );
}
