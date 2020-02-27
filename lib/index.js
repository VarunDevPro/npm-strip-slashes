module.exports = str => `/${str}/`.replace(/\/\/+/g, "/").replace(":/", "://");
