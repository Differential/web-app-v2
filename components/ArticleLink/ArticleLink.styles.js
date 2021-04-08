import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Box, Image, system } from 'ui-kit';

const Styled = {};

Styled.Container = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    flex-direction: row;
  }

  ${system}
`;

Styled.Image = styled(Image)`
  margin-bottom: ${themeGet('space.m')};
  object-fit: cover;
  order: initial;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 145px;
    margin-bottom: 0;
    min-width: 255px;
    order: 2;
  }

  ${system}
`;

export default Styled;
