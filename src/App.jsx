import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Card from "./components/ui/Card";
import CardContent from "./components/ui/CardContent";
import FlyInBoxes from "./FlyInBoxes";
import InputDesign from "./components/InputDesign";

const API_BASE_URL = "https://breakthemdown.onrender.com";

function App() {
 const [instruction, setInstruction] = useState("");
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(false);


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

  const [numBoxes, setNumBoxes] = useState(5); 
  const [fetchedMessages, setMessages] = useState([]);
  return (
  /*  <div className="max-w-2xl mx-auto p-4"> */
      <InputDesign />
  /*      <h1 className="text-2xl font-bold mb-4">Instruction Breakdown</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Enter a complex instruction..."
          className="p-2 border rounded"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Break Down"}
        </Button>
      </form>
      <div>
         {steps.length > 0 && (
          <Card>
              <CardContent>
              <ul className="list-decimal ml-4">
                {steps.map((step, index) => (
                  <li key={index} className="mt-2">{step}</li>
                ))}
              </ul>
                <FlyInBoxes fetchedMessages={steps} />
              </CardContent>
          </Card>
         )}
    </div> 
     <div className="mt-8">
        <h2 className="text-xl font-semibold">History</h2>
        {history.length > 0 ? (
          history.map((entry, index) => (
            <Card key={index} className="mt-4">
              <CardContent>
                <p className="font-semibold">{entry.instruction}</p>
                <ul className="list-disc ml-4 mt-2">
                  {entry.steps}
                </ul>
                <p className="text-sm text-gray-500 mt-2">{new Date(entry.created_at).toLocaleString()}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No history available.</p>
        )}
      </div>

  </div>
  */ );
}

export default App;

