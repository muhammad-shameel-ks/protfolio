/**
 * Custom hook encapsulating pipeline simulation logic.
 * Manages active step, completed steps, and the auto-advance timer.
 */

import { useState, useEffect, useCallback } from "react";
import { PIPELINE_STEPS } from "../data/pipeline";

export interface PipelineState {
  activeStepIndex: number;
  isSimulating: boolean;
  completedSteps: number[];
  currentStep: (typeof PIPELINE_STEPS)[number];
  startSimulation: () => void;
  selectStep: (index: number) => void;
  reset: () => void;
}

export function usePipelineSimulation(): PipelineState {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([0]);

  // Auto-advance during simulation
  useEffect(() => {
    if (!isSimulating) return;

    const timer = setTimeout(() => {
      if (activeStepIndex < PIPELINE_STEPS.length - 1) {
        const nextIndex = activeStepIndex + 1;
        setActiveStepIndex(nextIndex);
        setCompletedSteps((prev) => Array.from(new Set([...prev, nextIndex])));
      } else {
        setIsSimulating(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [isSimulating, activeStepIndex]);

  const startSimulation = useCallback(() => {
    setActiveStepIndex(0);
    setCompletedSteps([0]);
    setIsSimulating(true);
  }, []);

  const selectStep = useCallback((index: number) => {
    setIsSimulating(false);
    setActiveStepIndex(index);
    setCompletedSteps((prev) => Array.from(new Set([...prev, index])));
  }, []);

  const reset = useCallback(() => {
    setIsSimulating(false);
    setActiveStepIndex(0);
    setCompletedSteps([0]);
  }, []);

  return {
    activeStepIndex,
    isSimulating,
    completedSteps,
    currentStep: PIPELINE_STEPS[activeStepIndex],
    startSimulation,
    selectStep,
    reset,
  };
}
