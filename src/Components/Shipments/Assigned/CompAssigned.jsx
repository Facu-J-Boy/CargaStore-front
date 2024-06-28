import * as React from "react";
import { useSelector } from "react-redux";
//? --------------------------------------------- MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, useMediaQuery } from "@mui/material";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import { Grid } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../../Utils/Colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function CompAssigned() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(5);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mobile = useMediaQuery("(max-width:720px)");
  const order =
    useSelector((state) =>
      state.orders.filter((e) => e.state === "asignado")
    ) || [];

  return (
    <Box>
      {mobile ? (
        <>
          <h3
            style={{
              paddingLeft: "30px",
            }}
          >
            Envíos asignados
          </h3>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              padding: "20px",
            }}
          >
            {order.map((row) => (
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justyfyContent: "center",
                  gap: "5px",
                }}
              >
                <img src={row.img} />
                <p style={{ color: Colors.secondary.contrastText }}>
                  {row.product}
                </p>
                <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
                  Valor ofertado:{" "}
                  <p style={{ fontWeight: 400 }}> {row.value} </p>
                </span>
                <p>{row.retire}</p>
                <p>Tipo de carga: {row.seca}</p>
                <p>{row.country}</p>
                <p style={{ fontWeight: 500 }}>{row.driver}</p>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <Box
          sx={{
            minWidth: "100%",
            height: "100vh",
            paddingLeft: "30px",
            justifyContent: "flex-start",
            backgroundColor: Colors.terciary.contrastText,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 5,
              height: "20px",
              backgroundColor: Colors.terciary.contrastText,
            }}
          >
            {/* //? ----------------------------------------------------------- HEAD */}

            <Box
              style={{
                display: "flex",
                color: Colors.primary.main,
                minWdth: "100%",

                alignItems: "center",
                backgroundColor: Colors.terciary.contrastText,
              }}
            >
              <Box>
                <Grid
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{
                    display: "flex",
                    height: "100%",
                    marginBottom: 20,
                    padding: 5,
                    border: "1px solid",
                    borderColor: Colors.primary.main,
                    backgroundColor: Colors.primary.main,
                    color: Colors.primary.contrastText,
                    fontWeight: 600,
                    textAlign: "center",
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
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        width: "80px",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        width: "80px",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        width: "80px",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        width: "80px",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
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
                        width: "80px",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
                      }}
                    >
                      Conductor
                    </p>
                  </Grid>
                </Grid>
                {/* //? ----------------------------------------------------------- BODY */}
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {order.map((row) => (
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        background: "white",
                        color: "black",
                      }}
                    >
                      <Grid
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          height: "75px",
                          background: "white",
                        }}
                        spacing={0.5}
                      >
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: 500,
                              marginLeft: "3px",
                            }}
                          >
                            {row.product}
                          </p>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img src="/imgShipments/Product.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.retire}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          style={{ display: "flex" }}
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img
                              style={{ display: "flex" }}
                              src="/imgShipments/Location.svg"
                            />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.date}
                            </p>
                          </Box>
                        </Grid>

                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img src="/imgShipments/Date.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.delivery}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img src="/imgShipments/Location.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.secondDate}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img src="/imgShipments/Date.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.receiver}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img src="/imgShipments/Receiver.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.unity}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img src="/imgShipments/Truck.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.load}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box style={{ display: "flex", gap: "5px" }}>
                            <img src="/imgShipments/Load.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.seca}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <p
                            style={{
                              width: "80px",
                              fontSize: "12px",
                              fontWeight: 500,
                              marginLeft: "3px",
                            }}
                          >
                            {row.value}
                          </p>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"9%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box className="flexTable">
                            <Button
                              onClick={handleOpen}
                              variant="outlined"
                              style={{}}
                            >
                              Ver
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "right",
                    cursor: "pointer",
                  }}
                >
                  <img
                    onClick={handleClose}
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      alignContent: "right",
                    }}
                    src="/imgShipments/CloseButton.svg"
                  />
                </Box>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Detalles del conductor
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    border: "1px solid",
                    borderColor: Colors.primary.main,
                    borderRadius: "8px",
                    padding: "20px",
                    gap: "10px",
                    justifyContent: "center",
                    width: "90%",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      width: "30%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="/imgShipments/DriverDetails.jpg" />
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      width: "70%",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <h3 style={{ textAlign: "center" }}>José Luis</h3>

                    <Rating
                      style={{ marginLeft: "55px" }}
                      name="read-only"
                      value={value}
                      readOnly
                    />

                    <span
                      style={{ display: "flex", gap: "5px", fontWeight: 500 }}
                    >
                      Documento: <p style={{ fontWeight: 400 }}>123456</p>{" "}
                    </span>
                    <span
                      style={{ display: "flex", gap: "5px", fontWeight: 500 }}
                    >
                      Licencia: <p style={{ fontWeight: 400 }}>123456</p>
                    </span>
                    <span
                      style={{
                        display: "flex",
                        fontWeight: 500,
                        gap: "5px",
                      }}
                    >
                      Matrícula:<p style={{ fontWeight: 400 }}>123456</p>
                    </span>
                    <span
                      style={{
                        display: "flex",
                        gap: "5px",
                        fontWeight: 500,
                      }}
                    >
                      Capacidad de carga:<p> 123456</p>
                    </span>
                  </Box>
                </Box>

                <Typography
                  id="modal-modal-description"
                  style={{ marginBottom: "20px" }}
                >
                  Día de entrega 21/03/24
                </Typography>
              </Box>
            </Modal>
          </Box>
        </Box>
      )}
    </Box>
  );
}
