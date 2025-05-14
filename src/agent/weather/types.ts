import { Annotation } from "@langchain/langgraph";
import { GenerativeUIAnnotation } from "../types";

export const WeatherAnnotation = Annotation.Root({
  messages: GenerativeUIAnnotation.spec.messages,
  ui: GenerativeUIAnnotation.spec.ui,
  timestamp: GenerativeUIAnnotation.spec.timestamp,
});

export type WeatherState = typeof WeatherAnnotation.State;
export type WeatherUpdate = typeof WeatherAnnotation.Update;
