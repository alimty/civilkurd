/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require("path")
const fs = require("fs-extra")

exports.onPostBuild = () => {
fs.copySync(path.join(_dirname, "public"), path.join(_dirname, "../public"),{ overwrite: true })

}