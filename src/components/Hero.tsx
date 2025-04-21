import React, { useState, useEffect } from "react";
import axios from "axios";
export const Hero = () => {
    const [instruction, setInstruction] = useState("");
    const [loading, setLoading] = useState(false);
    const [steps, setSteps] = useState([]);
    const API_BASE_URL = "https://breakthemdown.onrender.com";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/breakdown`, {
                instruction,
            });
            setSteps(response.data.steps);
        } catch (error) {
            console.error("Error fetching steps", error);
        }
        setLoading(false);
    };

    return (
    <section className="px-6 pt-32 pb-20 mx-auto my-0 max-w-screen-xl text-center">
      <h1 className="mb-6 text-7xl font-[bold]">Break them down</h1>
      <p className="mx-auto mt-0 mb-8 text-2xl max-w-[800px] text-zinc-400">
        Turn complex Ideas, instructions, habits into clear, doable, steps so
        that they are easy to understand and act on
      </p>
        <form onSubmit={handleSubmit} className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center max-sm:mx-auto max-sm:my-0 max-sm:w-full max-sm:max-w-[400px]">
        <input
          className="px-8 py-4 text-xl font-medium rounded-md border border-solid transition-all bg-white bg-opacity-10 border-white border-opacity-10 duration-[0.2s] ease-[ease] text-slate-300 w-[400px] max-sm:w-full"
          type="text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Enter complex Ideas or instructions"
        />
        <button type="submit" disabled={loading} className="px-8 py-4 text-xl font-medium text-black bg-amber-300 rounded-md transition-all cursor-pointer border-[none] duration-[0.2s] ease-[ease] max-sm:w-full">
            {loading ? "Processing..." : "Submit Request"}
        </button>
        </form>
        {steps.length > 0 && (
            <div className="mt-12 text-left max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-white">Steps:</h2>
                <ul className="space-y-2 list-disc list-inside text-slate-300">
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            </div>
        )}
       </section>
  );
};
