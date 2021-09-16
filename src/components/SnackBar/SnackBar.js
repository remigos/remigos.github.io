import * as React from 'react';
import {Alert, Stack} from '@mui/material/';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        This is a success alert!
      </Alert>
    </Stack>
  );
}