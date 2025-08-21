import { useState } from "react";

const Btn = ({ variant = "plus", onClick, children }) => {
  const base =
    "px-4 py-2 rounded-lg active:scale-95 transition focus-visible:outline-none focus-visible:ring-2";
  const color =
    variant === "plus"
      ? "bg-emerald-600 hover:bg-emerald-500 focus-visible:ring-emerald-400"
      : "bg-rose-600 hover:bg-rose-500 focus-visible:ring-rose-400";
  return (
    <button type="button" onClick={onClick} className={`${base} ${color}`}>
      {children}
    </button>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  const counter = (num) => () => setCount((c) => c + num);

  const color =
    count >= 500
      ? "text-green-500"
      : count >= 50
      ? "text-blue-500"
      : count >= 5
      ? "text-purple-500"
      : count <= -500
      ? "text-red-500"
      : count <= -50
      ? "text-orange-500"
      : count <= -5
      ? "text-yellow-500"
      : "text-white";

  const row =
    "flex justify-center items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-4 shadow";

  const steps = [1, 10, 100];

  return (
    <div className="bg-black text-white w-dvw h-dvh flex items-center justify-center">
      <div className="w-full max-w-xl px-6">
        <h1 className="text-3xl font-bold tracking-tight text-center mb-8">
          Tailwind Counter
        </h1>

        <div className="grid gap-4">
          {steps.map((step) => (
            <div key={step} className={row}>
              <Btn variant="plus" onClick={counter(+step)}>
                +{step}
              </Btn>
              <Btn variant="minus" onClick={counter(-step)}>
                -{step}
              </Btn>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-lg">
          <span>-500 | -50 | -5 | 5 , 50, 500</span>
          <br />
          <span className={`font-mono text-2xl ${color}`}>
            count is {count}
          </span>
        </p>
      </div>
    </div>
  );
}
