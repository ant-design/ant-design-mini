import { FC } from 'react';
import './ResourceCard.less'

type Props = {
  image?: string;
  title: string;
  description: string;
  link: string;
};

const ResourceCard: FC<Props> = (props) => {
  return (
    <a className={'card'} href={props.link} target="_blank">
      {props.image && <img src={props.image} alt={props.title} />}
      <div className={'content'}>
        <div className={'title'}>{props.title}</div>
        <div className={'description'}>{props.description}</div>
      </div>
    </a>
  );
};

export default ResourceCard;
