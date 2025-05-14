import { Client } from "@langchain/langgraph-sdk";
import { RemoteGraph } from "@langchain/langgraph/remote";
import {
    START,
    END,
    StateGraph,
} from "@langchain/langgraph";
import { WeatherAnnotation, WeatherState } from "./types";



const remoteUrl = process.env.WEATHER_URL;
const remoteGraphName = "weather";
const client = new Client({ apiUrl: remoteUrl });
const remoteGraph = new RemoteGraph({ graphId: remoteGraphName, client });

// Build a simple StateGraph with the forwarding node
const workflow = new StateGraph(WeatherAnnotation)
    .addNode("weatherGraph", async (state: WeatherState) => {
        const result = await remoteGraph.invoke(state);
        // Return the remote graph's response as the node output
        console.log("Remote graph", result)
        return result;
    })
    .addEdge(START, "weatherGraph")
    .addEdge("weatherGraph", END);

export const graph = workflow.compile();
graph.name = "Weather Graph";
