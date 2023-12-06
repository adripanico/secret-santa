import { Paper, Stack } from '@mui/material';

import styles from './YourLots.module.scss';

export const YourLots = () => {
  const lots = [
    'Lorem, ipsum',
    'dolor sit amet',
    'consectetur adipisicing',
    ' elit. Aut quos',
    'Lorem, ipsum',
    'dolor sit amet',
    'consectetur adipisicing',
    ' elit. Aut quos',
    'Lorem, ipsum',
    'dolor sit amet',
    'consectetur adipisicing',
    ' elit. Aut quos',
    'Lorem, ipsum',
    'dolor sit amet',
    'consectetur adipisicing',
    ' elit. Aut quos',
    'Lorem, ipsum',
    'dolor sit amet',
    'consectetur adipisicing',
    ' elit. Aut quos',
    'Lorem, ipsum',
    'dolor sit amet',
    'consectetur adipisicing',
    ' elit. Aut quos',
  ];

  return (
    <Stack spacing={2}>
      {lots.map((title, index) => (
        <Paper key={index} className={styles.lot}>
          {title}
        </Paper>
      ))}
    </Stack>
  );
};
