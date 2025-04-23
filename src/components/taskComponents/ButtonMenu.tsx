import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Info,Trash2,Ellipsis,ChevronLeft,ChevronRight } from 'lucide-react';
import { getTaskListProps } from '../../core/interfaces/Taskprops';
import { TaskDetail } from './TaskDetail';
import { useWindowStore } from '../../states/WindowStates';
import { WindowDelete } from '../WindowDelete';
import { WindowConfirm } from '../windowConfirm';


export function ButtonMenu(Task:getTaskListProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {changestate,AsignDetail}=useWindowStore();
  const [OpenDeleteWindow,SetOpenDeleteWindow]=React.useState(false);
  const [OpenConfirmWindow,SetOpenConfirmWindow]=React.useState(false);
  return (
    <>
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
        <MenuItem onClick={()=>{
          AsignDetail(Task.title, Task.description ?? '', Task.limitDate);
          changestate(2);
          handleClose();}}>
        <div className='flex justify-between gap-2 w-full text-blue-600'>
              <span>Details</span> <Info className='size-5 my-auto'/>
            </div>
        </MenuItem>
        {Task.type==='In Progress'&&
          <MenuItem onClick={handleClose}>
            <div className='flex justify-between gap-2 w-full'>
              <span>Not Doing</span> <ChevronLeft/>
            </div>
          </MenuItem>
        }
        {(Task.type === 'Pending' || Task.type === 'In Progress') && (
        <MenuItem onClick={()=>{
          if(Task.type==='In Progress'){
            SetOpenConfirmWindow(true);
          }
          handleClose();}}>
        <div className='flex justify-between gap-2 w-full'>
              <span>{Task.type==='In Progress'?"Completed":"Doing"}</span> <ChevronRight/>
            </div>
          </MenuItem>
            )}
        <MenuItem onClick={()=>{handleClose();
          SetOpenDeleteWindow(true);
        }}><button><div className='text-red-600 flex justify-between gap-2 w-full'><span>Delete</span> <Trash2 className='size-5.5 my-auto'/></div></button></MenuItem>
      </Menu>
    </div>
    <TaskDetail/>
    <WindowDelete open={OpenDeleteWindow} close={()=>SetOpenDeleteWindow(false)} taskId={Task._id} />
    <WindowConfirm open={OpenConfirmWindow} close={()=>SetOpenConfirmWindow(false)} taskId={Task._id}/>
    </>
  );
}
