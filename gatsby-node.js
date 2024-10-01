const path = require("path");
const { copyLibFiles } = require('@builder.io/partytown/utils');
const gtmTrackingId = process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID;

exports.onPreBuild = async ({ actions: { } })=> {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));
}



