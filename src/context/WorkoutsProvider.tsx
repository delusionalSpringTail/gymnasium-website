"use client";

import React, { createContext, ReactNode, useState } from "react";

const WorkoutsContext = createContext({});

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saveLater, setSaveLater] = useState([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    saveLater,
    setSaveLater,
  };
  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
