import React from 'react';
import './Previewer.less';

interface IProps {
  herboxUrl: string;
}
const Previewer: React.FC<IProps> = (props) => {
  return (
    <div className="previewer">
      <iframe src={props.herboxUrl} />
    </div>
  );
};

export default Previewer;
