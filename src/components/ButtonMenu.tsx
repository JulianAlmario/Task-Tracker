import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Trash2,Ellipsis,ChevronLeft,ChevronRight } from 'lucide-react';
import { TypeTask } from '../core/interfaces/Taskprops';

export function ButtonMenu(TypeTask:TypeTask) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='bg-black'
      >
        <Ellipsis/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {TypeTask.type==='In Progress'&&
          <MenuItem onClick={handleClose}>
            <div className='flex justify-between gap-2 w-full'>
              <span>Not Doing</span> <ChevronLeft/>
            </div>
          </MenuItem>
        }
        {(TypeTask.type === 'Pending' || TypeTask.type === 'In Progress') && (
        <MenuItem onClick={handleClose}>
        <div className='flex justify-between gap-2 w-full'>
              <span>{TypeTask.type==='In Progress'?"Completed":"Doing"}</span> <ChevronRight/>
            </div>
          </MenuItem>
            )}
        <MenuItem onClick={handleClose}><div className='text-red-600 flex justify-between gap-2 w-full'><span>Delete</span> <Trash2/></div></MenuItem>
      </Menu>
    </div>
  );
}
