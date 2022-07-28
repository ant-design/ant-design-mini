module.exports = async (type, { github, context, core }) => {
  if (type === 'dist-tag') {
    const commentContent = process.env.COMMENT_CONTENT;
    if (!commentContent) {
      throw new Error('COMMENT_CONTENT is required');
    }
    const argv = commentContent.split(' ').slice(1);
    const distTag = argv[0];
    if (['alpha', 'beta', 'dev'].includes(distTag)) {
      return distTag;
    }
    return 'latest';
  }
};
