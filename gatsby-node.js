/**
 * Redirects to homepage on empty URLs
 * @param actions
 */
exports.createPages = ({actions}) => {
  const {createRedirect} = actions;
  createRedirect({
      fromPath: '/',
      toPath: '/home/',
      redirectInBrowser: true,
      isPermanent: true
  })
};
