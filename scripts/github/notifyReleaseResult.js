const { createVersionText } = require('./helpers');

module.exports = async (type, { github, context, core }, stage) => {
  if (stage === 'end') {
    const issueBody = createVersionText(
      type,
      process.env.DIST_VERSION,
      context
    );

    await github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: issueBody,
    });
    await github.rest.checks.update({
      owner: context.repo.owner,
      repo: context.repo.repo,
      status: 'completed',
      completed_at: new Date(),
      conclusion: 'success',
      check_run_id: process.env.CHECK_RUN_ID,
      output: {
        title: 'PR Next Version publish successful!',
        summary: `A version for pull request is **published**. version: **${process.env.DIST_VERSION}**`,
      },
    });
  } else if (stage === 'start') {
    // 创建一个 checkSuite
    const suite = await github.rest.checks.createSuite({
      owner: context.repo.owner,
      repo: context.repo.repo,
      head_sha: process.env.HEAD_SHA,
    });

    // 创建一个 checkRun
    const check = await github.rest.checks.create({
      owner: context.repo.owner,
      repo: context.repo.repo,
      name: '🚀🚀🚀 Release Version',
      status: 'in_progress',
      head_sha: suite.data.head_sha,
      output: {
        title: 'Release version is publishing. Please wait for a moment...',
        summary: `A version for pull request is **running**. sha: **${process.env.HEAD_SHA}**`,
      },
    });
    return check.data.id;
  } else if (stage === 'failure') {
    await github.rest.checks.update({
      owner: context.repo.owner,
      repo: context.repo.repo,
      status: 'completed',
      completed_at: new Date(),
      conclusion: 'failure',
      check_run_id: process.env.CHECK_RUN_ID,
      output: {
        title: 'Release Version publish failed',
        summary: `A version for pull request is **failed**. please check the error.`,
      },
    });
  }
};
