
const stuDetails = require("./stuDetails/stuDetails.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(stuDetails);
    // ~cb-add-configure-service-name~
};
