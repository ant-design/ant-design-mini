import { Helmet, useRouteMeta } from 'dumi';
import { useMemo } from 'react';
import useLocaleValue from '../hooks/useLocaleValue';
import { removeTitleCode } from '../utils';

const CommonHelmet = () => {
  const meta = useRouteMeta();
  const configTitle = useLocaleValue('title');

  const [title, description] = useMemo(() => {
    const helmetTitle = `${removeTitleCode(meta.frontmatter.subtitle) || ''} ${removeTitleCode(
      meta.frontmatter?.title
    )} - ${configTitle}`;
    const helmetDescription = meta.frontmatter.description;
    return [helmetTitle, helmetDescription];
  }, [meta, configTitle]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default CommonHelmet;
