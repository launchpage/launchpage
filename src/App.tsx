import React, { useState } from "react";
import "./App.css";
import { GearIcon } from "./assets/icons";
import { SettingsDashboard } from "./components/settings-dashboard";

const App = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-bold">App</h1>
          <p>Test</p>
        </div>
      </div>
      {settingsOpen && (
        <div className="bg-gray-400 top-0 right-0 w-5/12 h-screen">
          <div className="flex justify-between">
            <div>SETTINGS</div>
          </div>
          <SettingsDashboard />
        </div>
      )}
      <button
        className="absolute right-0 top-0 z-40"
        onClick={() => setSettingsOpen(!settingsOpen)}
      >
        <GearIcon />
      </button>
    </div>
  );
};

export default App;
