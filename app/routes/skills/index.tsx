import Card from '~/components/Card';
import { getClassMaker } from '~/utils/utils';

const BLOCK = 'skills-route';
const getClasses = getClassMaker(BLOCK);

export default function Skills() {
  return (
    <div className={getClasses()}>
      <Card />
    </div>
  );
}
