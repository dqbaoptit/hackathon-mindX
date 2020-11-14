import AccountIcon from '@material-ui/icons/AccountCircleOutlined';
import { IconButton } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function Button() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <IconButton onClick={handleClick}>
        <AccountIcon style={{ fontSize: '2rem', color: '#2c67be' }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ width: '10rem' }}>
          <MenuItem
            onClick={() => {
              router.push('/profile');
              handleClose();
            }}
            style={{
              height: '4rem',
              display: 'flex',
              justifyContent: 'space-around',

              alignItems: 'center',
            }}
          >
            <AccountCircleIcon /> Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push('/logout');
              handleClose();
            }}
            style={{
              height: '4rem',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <ExitToAppIcon /> Logout
          </MenuItem>
        </div>
      </Popover>
    </>
  );
}
