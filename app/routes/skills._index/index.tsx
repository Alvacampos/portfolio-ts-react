import 'react-vertical-timeline-component/style.min.css';

import { json, Link, useLoaderData } from '@remix-run/react';
import pkg, { VerticalTimeline } from 'react-vertical-timeline-component';
import { v4 as uuid } from 'uuid';

import Card, { links as cardLinks } from '~/components/Card';
import { Job } from '~/components/icons';
import { getClassMaker } from '~/utils/utils';

import styles from './style.css?url';

const { VerticalTimelineElement } = pkg;

export const links = () => [
  ...cardLinks(),
  { rel: 'stylesheet', href: styles },
];

const BLOCK = 'skills-route';
const getClasses = getClassMaker(BLOCK);

type DataTypes = {
  id: number;
  title: string;
  date: string;
  texts: string[];
  itemList: {
    title: string;
    text: string;
  }[];
  isRight?: boolean;
};

export async function loader() {
  const data: DataTypes[] = [
    {
      id: 1,
      title: 'Globant',
      date: 'Aug 2018 - Dec 2020 (2 .Yrs 4 .Mos)',
      texts: ['Hired as Jr Web developer.'],
      itemList: [
        {
          title: 'Project: eVestment',
          text: 'Worked on analytics web development using Vue.js, Vuex, Vue Router, and Highcharts. Also gained exposure to .NET Core and Node.js for backend tasks.',
        },
        {
          title: 'Project: Smile Direct Club',
          text: 'Developed web applications for Smile Direct Club using Vue.js, Nuxt.js, and JavaScript, prioritizing performance optimization through Nuxt server-side rendering. Utilized Vue-axios, Bootstrap-Vue, and ECMA 6+.',
        },
      ],
    },
    {
      id: 2,
      title: 'Globant',
      date: 'Aug 2018 - Dec 2020 (2 .Yrs 4 .Mos)',
      texts: [
        'Date: Aug 2018 - Dec 2020 (2 .Yrs 4 .Mos)',
        'Hired as Jr Web developer.',
      ],
      itemList: [
        {
          title: 'Project: eVestment',
          text: 'Worked on analytics web development using Vue.js, Vuex, Vue Router, and Highcharts. Also gained exposure to .NET Core and Node.js for backend tasks.',
        },
        {
          title: 'Project: Smile Direct Club',
          text: 'Developed web applications for Smile Direct Club using Vue.js, Nuxt.js, and JavaScript, prioritizing performance optimization through Nuxt server-side rendering. Utilized Vue-axios, Bootstrap-Vue, and ECMA 6+.',
        },
      ],
      isRight: true,
    },
    {
      id: 3,
      title: 'Globant',
      date: 'Aug 2018 - Dec 2020 (2 .Yrs 4 .Mos)',
      texts: [
        'Date: Aug 2018 - Dec 2020 (2 .Yrs 4 .Mos)',
        'Hired as Jr Web developer.',
      ],
      itemList: [
        {
          title: 'Project: eVestment',
          text: 'Worked on analytics web development using Vue.js, Vuex, Vue Router, and Highcharts. Also gained exposure to .NET Core and Node.js for backend tasks.',
        },
        {
          title: 'Project: Smile Direct Club',
          text: 'Developed web applications for Smile Direct Club using Vue.js, Nuxt.js, and JavaScript, prioritizing performance optimization through Nuxt server-side rendering. Utilized Vue-axios, Bootstrap-Vue, and ECMA 6+.',
        },
      ],
    },
  ];

  return json({
    data,
  });
}

export default function Skills() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div className={getClasses()}>
      <div className={getClasses('time-line')}>
        <VerticalTimeline>
          {data.map((item) => {
            const key = uuid();
            return (
              <VerticalTimelineElement
                className={getClasses('element')}
                date={item.date}
                icon={<Job />}
                key={key}
              >
                <Link
                  to={`/skills/${item.id}`}
                  tabIndex={-1}
                  className={getClasses('element-link')}
                >
                  <Card {...item} isStyleless />
                </Link>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
