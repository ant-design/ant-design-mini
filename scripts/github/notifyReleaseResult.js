const { createVersionText } = require('./helpers');

module.exports = async (type, { github, context, core }) => {
  const issueBody = createVersionText(type, process.env.DIST_VERSION, context);

  await github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: issueBody,
  });
};
