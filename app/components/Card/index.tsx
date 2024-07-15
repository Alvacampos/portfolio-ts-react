import { getClassMaker } from '~/utils/utils';

const BLOCK = 'card-component';
const getClasses = getClassMaker(BLOCK);

type CardProps = {
  title: string;
  texts: string[];
  itemList: {
    title: string;
    text: string;
  }[];
};

export default function Card({ title, texts, itemList }: CardProps) {
  return (
    <div className={getClasses()}>
      {title && (
        <div className={getClasses('title-wrapper')}>
          <h2>{title}</h2>
        </div>
      )}
      {texts && (
        <div className={getClasses('text-wrapper')}>
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}
      {itemList && (
        <ul className={getClasses('list')}>
          {itemList.map((item, index) => (
            <li key={index} className={getClasses('list-item')}>
              {item.title && <h3>{item.title}</h3>}
              {item.text && <p>{item.text}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
