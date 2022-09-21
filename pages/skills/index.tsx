import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import PageWrapper from '../../components/page-wrapper/page-wrapper';
import { SkillsCircle, CircleSize } from '../../components/skills-circle/skills-circle';
import { PageWithLayout } from '../_app';
import * as d3 from 'd3';
import { SimulationNodeDatum, Simulation } from 'd3';
import styles from './skills.module.scss';
import circleStyle from '../../components/skills-circle/skills-circle.module.scss';
import { remToPx } from '../../helpers/utils';

export type Skill = {
  id: number;
  parent: number | null;
  name: string;
  size: CircleSize;
  r?: number;
} & SimulationNodeDatum;

export function getStaticProps() {
  let SkillsData: Array<Skill> = [
    {
      id: 1,
      parent: null,
      name: 'WEB',
      size: 'big',
    },
    {
      id: 2,
      parent: 1,
      name: 'React.js',
      size: 'big',
    },
    {
      id: 3,
      parent: 1,
      name: 'Redux',
      size: 'small',
    },
    {
      id: 4,
      parent: 1,
      name: 'SCSS',
      size: 'small',
    },
    {
      id: 5,
      parent: 1,
      name: 'CSS',
      size: 'big',
    },
    {
      id: 6,
      parent: 1,
      name: 'Node.js',
      size: 'small',
    },
    {
      id: 7,
      parent: 1,
      name: 'Angular',
      size: 'small',
    },
    {
      id: 8,
      parent: 1,
      name: 'HTML',
      size: 'big',
    },
    {
      id: 9,
      parent: 1,
      name: 'TS',
      size: 'small',
    },
    {
      id: 10,
      parent: 1,
      name: 'D3.js',
      size: 'small',
    },
    {
      id: 11,
      parent: 1,
      name: 'JS',
      size: 'big',
    },
  ];

  let formattedSkillData = {
    name: 'WEB',
    size: 'big',
    children: [SkillsData.slice(1, SkillsData.length)],
  };

  SkillsData.forEach((skill, index) => {
    skill.x = (Math.random() + 10) * index;
    skill.y = (Math.random() + 10) * index;
  });
  return {
    props: {
      skills: SkillsData,
    },
  };
}

const SkillsSection: PageWithLayout<{ skills: Skill[] }> = ({ skills }) => {
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<Skill, any> | null>(null);
  const circlesList = useRef(new Array(skills.length));

  let newSkillData = d3
    .stratify<Skill>()
    .id((d) => d.id.toString())
    .parentId((d) => d.parent?.toString());

  let hSkills = newSkillData(skills);

  const someData = useRef<{
    links: any;
    nodes: any;
  }>({
    links: [],
    nodes: [],
  });

  const [, setRenderCount] = useState(0);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;
    const body = document.querySelector('body');

    if (skillsContainer && body && !simulationRef.current) {
      setTimeout(() => {
        someData.current.links = hSkills.links();
        someData.current.nodes = hSkills.descendants();
        const { height, width } = body.getBoundingClientRect();

        skills.forEach((x) => {
          x.r = remToPx(circleStyle.diameter) / 2;
        });

        const forceSimulation = d3.forceSimulation<Skill>(someData.current.nodes as any);

        simulationRef.current = forceSimulation;

        simulationRef.current
          .alphaDecay(0.01)
          .force(
            'link',
            d3
              .forceLink<Skill, any>(someData.current.links)
              .id((d) => d.id)
              .distance(250)
              .strength(2)
          )
          .force('x', d3.forceX(width / 2).strength(0.01))
          .force('y', d3.forceY(height / 2 - 120).strength(0.01))
          .force('charge', d3.forceManyBody().strength(-2500))
          .on('tick', () => {
            setRenderCount((state) => state + 1);
          });
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSkillClick = () => {
    const centerX = screen.width / 2;
    const centerY = screen.height / 2;
  };

  return (
    <div className={styles.skills_page}>
      <div className={styles.page_title}>Skills</div>
      <div ref={skillsContainerRef} className={styles.skills_container}>
        {someData.current.nodes.map((skill: any, index: number) => (
          <SkillsCircle
            skill={skill}
            key={`${skill.data.name}-${skill.data.size}`}
            isActive={false}
            simulation={simulationRef.current}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

SkillsSection.getLayout = (page) => <PageWrapper>{page}</PageWrapper>;

export default SkillsSection;
