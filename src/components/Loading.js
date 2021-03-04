import React from 'react';
import Lottie from 'react-lottie';
import { Box } from '@chakra-ui/react';
import * as loading from './panda.json';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Loading() {
  return (
    <Box mt={5}>
      <Lottie options={defaultOptions} height={320} width={320} />
    </Box>
  );
}
