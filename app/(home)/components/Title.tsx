import React from "react";

function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-pink-400 group-hover:scale-95 transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 rounded-full group-hover:opacity-0 transition-opacity bg-green-500"></div>
      <div className="w-40 h-2 rounded-full group-hover:opacity-0 transition-opacity bg-pink-500 translate-x-3"></div>
    </div>
  );
}

export default Title;
