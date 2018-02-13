import dev from './dev';

if (process.env.NODE_ENV === 'production') {
  module.exports = process.env.SECRET;
} else {
  module.exports = dev;
}
