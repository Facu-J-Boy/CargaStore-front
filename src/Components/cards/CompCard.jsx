//import Paper from "../../assets/Paper/Paper.png"
import { Box, Stack } from "@mui/material" // Import the necessary components

export const CompCard = () => {
  const Card = [
    {
      Titulo: "Bobinas de papel",
      País: "Perú-Bolivia",
      Carga: "Carga seca",
      Fecha: "07/02/2323",
      Precio: "Total: $11.800",
      Imagen: "/src/assets/Paper/Paper.png",
    },
    {
      Titulo: "Bobinas de papel",
      País: "Perú-Bolivia",
      Carga: "Carga seca",
      Fecha: "07/02/2323",
      Precio: "Total: $11.800", 
      Imagen: "/src/assets/Paper/Paper.png",
    },
    {
      Titulo: "Bobinas de papel",
      País: "Perú-Bolivia",
      Carga: "Carga seca",
      Fecha: "07/02/2323",
      Precio: "Total: $11.800",
      Imagen: "/src/assets/Paper/Paper.png",
    },
    {
      Titulo: "Bobinas de papel",
      País: "Perú-Bolivia",
      Carga: "Carga seca",
      Fecha: "07/02/2323",
      Precio: "Total: $11.800",
      Imagen: "/src/assets/Paper/Paper.png",
    },
  ]

  return (
    <Box
      sx={{
        border: "1px solid #D0D5DD",
        width: "600px",
        //  height: "560px",
        marginTop: "10px",
        marginLeft: "290px",
        borderRadius: "8px",
        display: "flex",
        backgroundColor: "#F6F6F6",
      }}
    >
      <Stack
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        direction="column" // Change direction to column
      >
        {Card.map((Card, key) => (
          <Box key={key}>
            <Box sx={{ display: "flex", gap: "320px", padding: "20px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <p style={{ fontWeight: 500, fontSize: "20px" }}>
                  {Card.Titulo}
                </p>
                <p>{Card.Pais}</p>
                <p>{Card.Carga}</p>
                <p>{Card.Fecha}</p>
                <p style={{ color: "#007C52" }}>{Card.Precio}</p>
              </Box>                  
              <Box>
                <img
                  style={{ width: "140px", height: "135px" }}
                  src={Card.Imagen}
                  alt="Paper"
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", width: "100%", marginLeft: "100px" }}>
              <img
                style={{ marginTop: "1px", marginBottom: "20px" }}
                src="/src/assets/Avatar/Divider.png"
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}