import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';

export default function AccordionMenu() {
 return (
  <div>
   <Accordion sx={{ backgroundColor: '#3d3d3d', width: '100%' }}>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
     aria-controls="panel1a-content"
     id="panel1a-header"
    >
     <Typography sx={{ color: '#fff' }}><FormatListBulletedIcon sx={{ color: '#bd5457', height: '20px' }} /> Computer</Typography>
    </AccordionSummary>
    <AccordionDetails>
     <ListItemButton sx={{ textAlign: 'center' }}>
      <Link style={{textDecoration: 'none', color: 'white'}} to='#'>Hello</Link>
     </ListItemButton>
    </AccordionDetails>
   </Accordion>
  </div>
 );
}
