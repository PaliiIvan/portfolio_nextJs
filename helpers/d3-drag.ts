import * as d3 from "d3";
import { Skill } from "../pages/skills";

export function initiateDrugEvents(simulation: d3.Simulation<Skill, undefined> | null) {

    if (!simulation) {
        return {
            nullDrag: null,
            activeDrag: null
        }
    }

    function dragStarted(event: d3.D3DragEvent<any, any, any>) {
        if (!event.active) {
            simulation?.alphaTarget(0.3).restart()
        };

        event.subject.x = event.x;
        event.subject.y = event.y;
    }


    function dragged(event: d3.D3DragEvent<any, any, any>, data: Skill) {
        console.log(event.subject.x);

        event.subject.x = event.x;
        event.subject.y = event.y;
        event.subject.fx = event.x;
        event.subject.fy = event.y;

    }

    function dragEnded(event: d3.D3DragEvent<any, any, any>) {
        if (!event.active) simulation?.alphaTarget(0);
        event.subject.x = event.x;
        event.subject.y = event.y;
        event.subject.fx = null;
        event.subject.fy = null;
        simulation?.restart();
    }

    let nullDrag = d3.drag<HTMLDivElement, Skill>()
        .on("start", null)
        .on("drag", null)
        .on("end", null);

    let activeDrag = d3.drag<HTMLDivElement, Skill>()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded);

    return ({
        nullDrag,
        activeDrag
    });
}