import { useRouteMeta, useIntl, FormattedMessage } from 'dumi';
import { EditOutlined } from '@ant-design/icons';
import useAdditionalThemeConfig from '../hooks/useAdditionalThemeConfig';

const EditLink = () => {
  const { frontmatter } = useRouteMeta();
  const { editLink } = useAdditionalThemeConfig();
  const intl = useIntl();

  const showEditLink = editLink && frontmatter.filename;
  return showEditLink ? (
    <div>
      <a
        target="_blank"
        href={`${intl.formatMessage(
          { id: '$internal.edit.link' },
          { filename: frontmatter.filename }
        )}`}
        rel="noreferrer"
      >
        <EditOutlined />
        <FormattedMessage id="app.footer.actions.edit" />
      </a>
    </div>
  ) : null;
};

export default EditLink;
