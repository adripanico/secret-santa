import { Box, CssBaseline } from '@mui/material';
import { NewLot } from 'components/NewLot/NewLot';
import { YourLots } from 'components/YourLots/YourLots';
import { ISection } from 'models/sections';
import { useEffect, useState } from 'react';

import { Menu } from './Menu';

export const Layout = () => {
  const [section, setSection] = useState<ISection>('yourLots');

  useEffect(() => {
    if (document?.body?.parentElement?.scrollTop) {
      document.body.parentElement.scrollTop = 0;
    }
  }, [section]);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      {section === 'yourLots' && <YourLots />}
      {section === 'newLot' && <NewLot />}
      <Menu section={section} setSection={setSection} />
    </Box>
  );
};
