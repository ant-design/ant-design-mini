import React, { useState } from 'react';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/index';
import './Previewer.less';

interface IProps {
  herboxUrl: string;
}
const Previewer: React.FC<IProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="previewer">
      {!loaded && <Spin spinning   className="previewer-loading" />}
      <iframe src={props.herboxUrl} onLoad={() => setLoaded(true)} />
    </div>
  );
};

export default Previewer;
