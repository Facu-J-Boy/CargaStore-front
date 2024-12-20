import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Grid, useMediaQuery } from "@mui/material";
import Modal from "@mui/material/Modal";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
};

// function createData(
//   index,
//   code,
//   product,
//   weight,
//   country,
//   delivery,
//   load,
//   client,
//   value,
//   img,
//   driver
// ) {
//   return {
//     index,
//     code,
//     product,
//     weight,
//     country,
//     delivery,
//     load,
//     client,
//     value,
//     img,
//     driver,
//   };
// }

// const rows = [
//   createData(
//     "0",
//     "#1205",
//     "Bobinas",
//     "1 tonelada",
//     "Colombia",
//     "12/03/24 - 21/03/24",
//     "Seca",
//     "María Paz",
//     "$12.00",
//     "/imgShipments/Bobinas.jpg",
//     "Luis Alvarez"
//   ),
//   createData(
//     "1",
//     "#1205",
//     "Bobinas",
//     "1 tonelada",
//     "Colombia",
//     "12/03/24 - 21/03/24",
//     "Seca",
//     "María Paz",
//     "$12.00",
//     "/imgShipments/Bobinas.jpg",
//     "Luis Alvarez"
//   ),
// ];

export default function CompPendingPayment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();
  const componentRef = useRef();
  const pending = useSelector((state) =>
    state.adminPayment.filter((e) => e.status === "pendiente")
  );
  //Generar pdf
  const generatePdf = () => {
    const opt = {
      margin: 1,
      filename: "Factura_:" + Date.now() + ".pdf",
      image: { type: "png", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(componentRef.current).save();
  };

  return (
    <Box>
      {mobile ? (
        <>
          <h3
            style={{
              paddingLeft: "30px",
            }}
          >
            Pagos pendientes
          </h3>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              padding: "20px",
            }}
          >
            {pending.map((row) => (
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justyfyContent: "center",
                  gap: "5px",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                <img src={row.img} />
                <p style={{ color: Colors.secondary.contrastText }}>
                  {row.code}
                </p>
                <p>{row.product}</p>
                <span style={{ display: "flex", gap: "5px", fontWeight: 600 }}>
                  Valor ofertado:{" "}
                  <p style={{ fontWeight: 400 }}> {row.value} </p>
                </span>
                <p>{row.weight}</p>
                <p>Tipo de carga: {row.load}</p>
                <p>{row.country}</p>
                <p style={{ fontWeight: 500 }}>{row.driver}</p>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: Colors.terciary.contrastText,
          }}
        >
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 5,
              height: "20px",
              backgroundColor: Colors.terciary.contrastText,
              marginLeft: "30%",
            }}
          >
            {/* //? --------------------------------------------- HEAD */}

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
                    padding: 10,
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
                      Código
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
                      Peso
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
                      País
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
                        fontSize: "12px",
                        fontWeight: 600,
                        marginLeft: "3px",
                      }}
                    >
                      Carga
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
                      Cliente
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
                      Valor
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
                      Detalle
                    </p>
                  </Grid>
                </Grid>
                {/* //? --------------------------------------------- BODY*/}

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {rows.map((row) => (
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
                          minWidth: "1000px",
                          height: "75px",
                          background: "white",
                        }}
                        spacing={0.5}
                      >
                        <Grid
                          item
                          container
                          width={"11.1%"}
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
                            {row.code}
                          </p>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"11.1%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <img src="/imgShipments/Product.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.product}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"11.1%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <img
                              style={{ display: "flex" }}
                              src="/imgShipments/Load.svg"
                            />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.weight}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"11.1%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <img src="/imgShipments/Location.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.country}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"11.1%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
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
                          width={"11.1%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <img src="/imgShipments/Load.svg" />
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
                          width={"11.1%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            style={{
                              display: "flex",
                              gap: "5px",
                              alignItems: "center",
                            }}
                          >
                            <img src="/imgShipments/Receiver.svg" />
                            <p
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                marginLeft: "3px",
                              }}
                            >
                              {row.client}
                            </p>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"11.1%"}
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
                            {row.value}
                          </p>
                        </Grid>
                        <Grid
                          item
                          container
                          width={"11.1%"}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          {" "}
                          <img
                            onClick={handleOpen}
                            style={{ cursor: "pointer" }}
                            src="/imgAdminPayment/EyeIcon.svg"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
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
              padding: "5px",
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

          <Box
            style={{
              display: "flex",
              border: "1px solid",
              borderColor: Colors.terciary.main,
              borderRadius: "8px",
              padding: "20px",
              gap: "15px",
              justifyContent: "center",
              width: "90%",
            }}
          >
            <Box
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                gap: "10px",
              }}
              ref={componentRef}
            >
              <h3 style={{ textAlign: "center" }}>Bobinas de papel</h3>

              <span style={{ display: "flex", gap: "5px", fontWeight: 500 }}>
                Cliente: <p style={{ fontWeight: 400 }}>María paz</p>{" "}
              </span>
              <span style={{ display: "flex", gap: "5px", fontWeight: 500 }}>
                Unidades: <p style={{ fontWeight: 400 }}>385</p>
              </span>
              <span
                style={{
                  display: "flex",
                  fontWeight: 500,
                  gap: "5px",
                }}
              >
                Dirección de retiro:
                <p style={{ fontWeight: 400 }}>Calle 1, La paz, Bolivia</p>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: 500,
                }}
              >
                Dirección de entrega:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  Calle 365, La paz, Bolivia
                </p>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: 500,
                }}
              >
                Fecha de entrega y retiro:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  23/02/2023 - 25/02/23
                </p>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: 500,
                }}
              >
                Fecha de pago:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  23/02/2023
                </p>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: 500,
                }}
              >
                Conductor:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  Luis Alvarez
                </p>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: 500,
                }}
              >
                Calificación del cliente:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  5 estrellas
                </p>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: 500,
                }}
              >
                Reseña:
                <p
                  style={{
                    fontWeight: 400,
                  }}
                >
                  "Luis cuidó la mercadería, ha sido muy cordial y la entrega
                  fue muy rápida"
                </p>
              </span>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "right",
                  marginLeft: "150px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    gap: "5px",
                    fontWeight: 500,
                  }}
                >
                  Valor del envío: $12.000
                </span>
                <span
                  style={{
                    display: "flex",
                    gap: "5px",
                    fontWeight: 400,
                  }}
                >
                  Decuento 20% por comisión: -$2.400
                </span>
                <span
                  style={{
                    display: "flex",
                    gap: "5px",
                    fontWeight: 500,
                    color: Colors.primary.main,
                  }}
                >
                  Valor final: 9.600
                </span>
              </Box>
            </Box>
          </Box>

          <Typography
            id="modal-modal-description"
            style={{ color: Colors.cuaternary.main, cursor: "pointer" }}
            onClick={() => generatePdf()}
          >
            Ver factura
          </Typography>

          <Button
            variant="contained"
            style={{ marginBottom: "10px" }}
            onClick={() => navigate("/post-payment")}
          >
            Efectuar pago al conductor
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
