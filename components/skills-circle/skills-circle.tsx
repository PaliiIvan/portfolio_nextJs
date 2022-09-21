import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import * as d3 from 'd3';
import { FC } from '../../helpers/types/functional-component.type';
import styles from './skills-circle.module.scss';
import { initiateDrugEvents } from '../../helpers/d3-drag';
import type { Skill } from '../../pages/skills';

export type SkillsCircleType = {
  isActive: boolean;
  simulation: d3.Simulation<Skill, undefined> | null;
  skill: d3.HierarchyNode<Skill> & { x: number; y: number };
  onClick(): void;
};

export type CircleSize = 'big' | 'small';

const getSvgCircleSize = () => {
  const diameter = parseInt(styles.diameter);
  return `${-diameter / 2} ${-diameter / 2} ${diameter} ${diameter}`;
};

const SvgBorder = () => (
  <svg viewBox={getSvgCircleSize()}>
    <circle cx={0} cy={0} r="49.6%" className={styles.big}></circle>
  </svg>
);

export const SkillsCircle: FC<SkillsCircleType> = ({ isActive, skill, simulation, onClick }) => {
  const circle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let selection: d3.Selection<HTMLDivElement, Skill, null, undefined>;

    let { activeDrag, nullDrag } = initiateDrugEvents(simulation);

    if (circle.current && activeDrag) {
      selection = d3.select<HTMLDivElement, d3.HierarchyNode<Skill>>(circle.current).data([skill as any]);

      selection.call(activeDrag as any);
    }

    return () => {
      if (nullDrag) {
        selection.call(nullDrag as any);
      }
    };
  }, [skill, simulation]);

  return (
    <div
      onClick={onClick}
      ref={circle}
      style={{
        transform: `translate(${skill.x || 0}px, ${skill.y || 0}px)`,
      }}
      className={cn(styles.skill_circle, styles.big, { [styles['--active']]: isActive })}
    >
      {skill.data.name}
      <SvgBorder />
    </div>
  );
};
