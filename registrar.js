const fs = require('fs');

//initializers
if (!fs.existsSync('fediverse_auth.json')) fs.copyFileSync('fediverse_auth.example.json', 'fediverse_auth.json');
if (!fs.existsSync('matrix_auth.json')) fs.copyFileSync('matrix_auth.example.json', 'matrix_auth.json');
if (!fs.existsSync('config.js')) fs.copyFileSync('config.example.js', 'config.js');
if (!fs.existsSync('timeline.json')) fs.writeFileSync('timeline.json', 0);
if (!fs.existsSync('notification.json')) fs.writeFileSync('notification.json', 0);

module.exports = {
  config: require('./config.js'),
  fediverse_auth: require('./fediverse_auth.json'),
  matrix_auth: require('./matrix_auth.json'),
  archive: require('./commands/archive.js'),
  invidious: require('./commands/invidious.js'),
  nitter: require('./commands/nitter.js'),
  beg: require('./commands/fediverse/beg.js'),
  boo: require('./commands/fediverse/boo.js'),
  clap: require('./commands/fediverse/clap.js'),
  copy: require('./commands/fediverse/copy.js'),
  flood: require('./commands/fediverse/flood.js'),
  follow: require('./commands/fediverse/follow.js'),
  help: require('./commands/help.js'),
  media: require('./commands/fediverse/media.js'),
  mordy: require('./commands/fediverse/mordy.js'),
  notify: require('./commands/fediverse/notify.js'),
  pin: require('./commands/fediverse/pin.js'),
  post: require('./commands/fediverse/post.js'),
  redact: require('./commands/fediverse/redact.js'),
  reply: require('./commands/fediverse/reply.js'),
  status: require('./commands/fediverse/status.js'),
  tip: require('./commands/fediverse/tip.js'),
  unfollow: require('./commands/fediverse/unfollow.js'),
  unpin: require('./commands/fediverse/unpin.js')
};
