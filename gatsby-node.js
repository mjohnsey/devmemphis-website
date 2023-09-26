const { format } = require("date-fns");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  createPage({
    ...page,
    context: {
      ...page.context,
      currentDate: format(new Date(), "yyyy-MM-dd"),
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/meetups/40th`,
    toPath: `/meetups/2023-10-11-devmemphis-extravaganza`,
    redirectInBrowser: true,
    isPermanent: true
  })
}
