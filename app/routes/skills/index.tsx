import { json, useLoaderData } from '@remix-run/react';
import { v4 as uuid } from 'uuid';

import Card, { links as cardLinks } from '~/components/Card';
import { getClassMaker } from '~/utils/utils';

import styles from './style.css?url';

export const links = () => [
  ...cardLinks(),
  { rel: 'stylesheet', href: styles },
];

const BLOCK = 'skills-route';
const getClasses = getClassMaker(BLOCK);

type DataTypes = {
  title: string;
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
      title: 'Globant',
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
    {
      title: 'Globant',
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
      title: 'Globant',
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
        {data.map((item) => {
          const key = uuid();
          return <Card {...item} key={key} />;
        })}
      </div>
    </div>
  );
}
