import dev from './dev';

let env;

if (process.env.NODE_ENV === 'production') {
  env = process.env.SECRET;
} else {
  env = dev;
}

export default env;
