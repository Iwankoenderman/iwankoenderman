const path = require("path");
const { copyLibFiles } = require('@builder.io/partytown/utils');
const gtmTrackingId = process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID;

exports.onPreBuild = async ({ actions: { createRedirect } })=> {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));

  createRedirect({
    fromPath:  `/__third-party-proxy?url=https://www.googletagmanager.com/gtag/js?id=${gtmTrackingId}`,
    toPath: `https://www.googletagmanager.com/gtag/js?id=${gtmTrackingId}`,
    statusCode: 200,
  })
}



