import { useState } from 'react'
import { Dropdown } from '@jt122406/mui-dropdown'
import { Box, Typography } from '@mui/material'
import './App.css'

function App() {
  const [value, setValue] = useState<string>('option1')

  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
    { label: 'Option 6', value: 'option6' },
  ]

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dropdown Test App
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Default Dropdown</Typography>
        <Dropdown
          items={items}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Dropdown with visibleItemsCount={3}</Typography>
        <Dropdown
          items={items}
          visibleItemsCount={3}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
      </Box>
    </Box>
  )
}

export default App
