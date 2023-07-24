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
