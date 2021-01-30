import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import db from '../../../db.json';

function Logo() {
  return (
    <motion.img
      src={db.logo}
      alt=""
      width={135}
      height={67}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        normal: { opacity: 1, y: 0 },
        top: { opacity: 0, y: '100%' },
      }}
      initial="top"
      animate="normal"
    />
  );
}

const QuizLogo = styled(Logo)`
  align-self: center;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
