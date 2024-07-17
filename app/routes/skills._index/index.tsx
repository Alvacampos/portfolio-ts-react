import 'react-vertical-timeline-component/style.min.css';

import { json, Link, useLoaderData } from '@remix-run/react';
import { format } from 'date-fns';
import pkg, { VerticalTimeline } from 'react-vertical-timeline-component';
import { v4 as uuid } from 'uuid';

import Card, { links as cardLinks } from '~/components/Card';
import { Job } from '~/components/icons';
import { WORK_ITEMS } from '~/utils/data';
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
};

const FormatDate = (startDate: string, endDate?: string) => {
  if (!endDate) {
    return `${format(new Date(startDate), 'MM/yyyy')} - Present`;
  }

  return `${format(new Date(startDate), 'MM/yyyy')} - ${format(new Date(endDate), 'MM/yyyy')}`;
};

export async function loader() {
  const data: DataTypes[] = WORK_ITEMS.map((item) => ({
    id: item.id,
    title: item.title,
    date: FormatDate(item.startDate, item.endDate),
    texts: [item.subtitle],
  }));

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
