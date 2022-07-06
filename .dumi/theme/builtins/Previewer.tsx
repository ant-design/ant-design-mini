import React, { useState } from 'react';
import './Previewer.less';

interface IProps {
  herboxUrl: string;
}
const Previewer: React.FC<IProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="previewer">
      {!loaded && <div className="previewer-loading" />}
      <iframe
        src={props.herboxUrl}
        onLoad={() => setLoaded(true)}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default Previewer;
