import React, { useState, useEffect } from 'react';
import './Previewer.less';

interface IProps {
  herboxUrl: string;
}
const Previewer: React.FC<IProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data.previewURL) {
        setURL(event.data.previewURL);
      }
    }, false);
  }, []);

  const [url, setURL] = useState(props.herboxUrl);

  return (
    <div className="previewer">
      {!loaded && <div className="previewer-loading" />}
      <iframe
        src={url}
        onLoad={() => setLoaded(true)}
        allow="clipboard-read; clipboard-write"
      />
    </div>
  );
};

export default Previewer;
