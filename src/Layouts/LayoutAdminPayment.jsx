import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterPayment } from '../Redux/Actions/PaymentActions/paymentActions';
//? --------------------------------------------- MUI
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useMediaQuery } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//? --------------------------------------------- STYLES
import { Colors } from '../Utils/Colors';

const drawerWidth = 240;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LayoutAdminPayment() {
  const [value, setValue] = React.useState(0);
  const mobile = useMediaQuery('(max-width:720px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickPending = () => {
    setAnchorEl(null);
    navigate('/payment');
  };
  const clickAccredited = () => {
    setAnchorEl(null);
    navigate('/payment/acredited');
  };

  const tabNameToIndex = {
    Pendientes: 0,
    Acreditados: 1,
  };

  const handleChange = (event, newValue) => {
    const tabName = event.target.name;
    if (tabName in tabNameToIndex) {
      setValue(tabNameToIndex[tabName]);
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    if (value === '0') {
      // dispatch(filterPayment(value)) &&
      navigate('/payment');
    } else {
      // dispatch(filterPayment(value)) &&
      navigate('/payment/acredited');
    }
  }, [value]);
  return (
    <Box>
      {mobile ? (
        <>
          <Box
            style={{
              display: 'flex',
              alignItems: 'right',
              justifyContent: 'right',
              padding: '10px',
            }}
          >
            <img
              onClick={handleClick}
              style={{
                backgroundColor: Colors.primary.constrastText,
                cursor: 'pointer',
              }}
              src="/imgShipments/ArrowDashboard.svg"
            />
            <Menu
              value={value}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                name="Pendientes"
                value="0"
                onClick={clickPending}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === '/payment'
                      ? Colors.primary.main
                      : '',
                }}
              >
                Pendientes
              </MenuItem>
              <MenuItem
                name="Asignado"
                value="1"
                onClick={clickAccredited}
                style={{
                  fontWeight: 500,
                  color:
                    location.pathname === '/shipments/acredited'
                      ? Colors.primary.main
                      : '',
                }}
              >
                Acreditados
              </MenuItem>
            </Menu>
          </Box>
        </>
      ) : (
        <Box sx={{ minWidth: '100%', display: 'flex' }}>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: 'border-box',
                marginTop: '64px',
              },
            }}
          >
            <span
              style={{
                color: Colors.primary.main,
                fontWeight: 600,
                padding: '20px',
              }}
            >
              Pagos
            </span>
            <Box sx={{ border: 'none' }}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{
                    textTransform: 'none',
                    display: 'flex',
                    width: '239px',
                  }}
                  label="Pendientes"
                  name="Pendientes"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: 'none' }}
                  label="Acreditados"
                  name="Acreditados"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
          </Drawer>{' '}
        </Box>
      )}
      <Outlet />
      {mobile ? (
        <Box
          style={{
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'right',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <img src="/imgAdminPayment/ChatIcon.svg" />
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
}
