import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//? --------------------------------------------- MUI
import Box from '@mui/material/Box';
import { useMediaQuery, Grid } from '@mui/material';
//? --------------------------------------------- STYLES
import { Colors } from '../../../Utils/Colors';
import './styles.css';
import { listOrder } from '../../../Redux/Actions/OrderActions/listOrder';
import { clearOrdersList } from '../../../Redux/Actions/OrderActions/clearOrdersList';
import ShipmentsItem from '../Items/ShipmentsItem/ShipmentsItem';
import MobileShipmentItem from '../Items/MobileShipmentsItem/MobileShipmentItem';
import Loading from '../../Loading/Loading';
import ShipmentsMessage from '../ShipmentsMessage/ShipmentsMessage';

export default function CompInProgress() {
  const dispatch = useDispatch();
  const mobile = useMediaQuery('(max-width:720px)');

  const { user } = useSelector((state) => state.user);

  React.useEffect(() => {
    user?.role === 'customer'
      ? dispatch(
          listOrder(
            'en curso', //status
            '', //orderType
            user?.customer?.id, //customerId
            '', //pendingAssignedDriverId
            '' //assignedDriverId
          )
        )
      : user?.role === 'driver' &&
        dispatch(
          listOrder(
            'en curso', //status
            '', //orderType
            '', //customerId
            '', //pendingAssignedDriverId
            user?.driver?.id //assignedDriverId
          )
        );
    return () => {
      dispatch(clearOrdersList());
    };
  }, [dispatch, user?.customer?.id, user]);

  const { orders, ordersLoading, message } = useSelector(
    (state) => state.orders
  );

  return (
    <Box style={{ background: '#FFF' }}>
      {ordersLoading ? (
        <Box
          style={{
            display: 'flex',
            height: '80vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loading color="#333" />
        </Box>
      ) : orders.length === 0 && !ordersLoading && message ? (
        <ShipmentsMessage message={message} />
      ) : (
        <>
          {mobile ? (
            <>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                {orders?.map((row) => (
                  <MobileShipmentItem
                    key={row.id}
                    id={row.id}
                    status={row.status}
                    image={row.package.image1}
                    price={row.package.offered_price}
                    productName={row.package.product_name}
                    pick_up_date={row.pick_up_date}
                    delivery_date={row.delivery_date}
                    driverName={row.assignedDriver?.user_driver.name}
                  />
                ))}
              </Box>
            </>
          ) : (
            <Box
              sx={{
                minWidth: '100%',
                display: 'flex',
                paddingLeft: '30px',
                justifyContent: 'flex-start',
                height: '100vh',
                backgroundColor: Colors.terciary.contrastText,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: 5,
                  height: '20px',
                  backgroundColor: Colors.terciary.contrastText,
                }}
              >
                {/* //? --------------------------------------------- HEAD */}

                <Box
                  style={{
                    display: 'flex',
                    color: Colors.primary.main,
                    minWdth: '100%',
                    alignItems: 'center',
                    backgroundColor: Colors.terciary.contrastText,
                  }}
                >
                  <Box>
                    <Grid
                      justifyContent={'center'}
                      alignItems={'center'}
                      style={{
                        display: 'flex',
                        height: '100%',
                        marginBottom: 20,
                        padding: 5,
                        border: '1px solid',
                        borderColor: Colors.primary.main,
                        backgroundColor: Colors.primary.main,
                        color: Colors.primary.contrastText,
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                      spacing={0.5}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Código
                        </p>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Producto
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Retiro
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Fecha y hora
                        </p>
                      </Grid>

                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Entrega
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Fecha y hora
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Destinatario
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Unidad
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Tipo de carga
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Valor ofertado
                        </p>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <p
                          style={{
                            width: '80px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '3px',
                          }}
                        >
                          Conductor
                        </p>
                      </Grid>
                    </Grid>
                    {/* //? --------------------------------------------- BODY */}

                    <Box
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                      }}
                    >
                      {orders?.map((row) => (
                        <ShipmentsItem
                          key={row.id}
                          userRole={user?.role}
                          status={row.status}
                          code={row.id}
                          productName={row.package.product_name}
                          pick_up_address={row.pick_up_address}
                          pick_up_date={row.pick_up_date}
                          pick_up_time={row.pick_up_time}
                          delivery_address={row.delivery_address}
                          delivery_date={row.delivery_date}
                          delivery_time={row.delivery_time}
                          receiving_company={row.receiving_company}
                          assignedDriver={row.assignedDriver}
                          brand={row.assignedDriver?.truck.brand}
                          model={row.assignedDriver?.truck.model}
                          type={row.package.type}
                          price={row.package.offered_price}
                          profileImage={
                            row.assignedDriver?.user_driver
                              .profile_image
                          }
                          driverName={
                            row.assignedDriver?.user_driver.name
                          }
                          license={row.assignedDriver?.num_license}
                          rating={row.assignedDriver?.rating}
                          num_plate={
                            row.assignedDriver?.truck.num_plate
                          }
                          charge_capacity={
                            row.assignedDriver?.truck.charge_capacity
                          }
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}{' '}
        </>
      )}
    </Box>
  );
}
