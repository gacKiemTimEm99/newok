module.exports = {
  convertMongooseToObject: (shows) => {
    return shows.map((show) => show.toObject());
  },
  mongooseToObject: (show) => {
    return show ? show.toObject() : show;
  },
};
