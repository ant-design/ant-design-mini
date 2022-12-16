import React, { useState, useEffect } from 'react';
import './Previewer.less';

interface IProps {
  herboxUrl: string;
}
const Previewer: React.FC<IProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [url, setURL] = useState(window.location.protocol + '//' + window.location.host + props.herboxUrl);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (typeof event.data.theme !== 'undefined') {
        const urlObj = new URL(url);
        urlObj.searchParams.set('less-theme', event.data.theme);
        setURL(urlObj.toString());
      }
    }, false);
  }, []);


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
