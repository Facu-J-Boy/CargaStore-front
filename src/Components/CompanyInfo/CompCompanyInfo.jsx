import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postUser } from "../../Redux/Actions/UserActions/userActions";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";

export default function CompCompanyInfo() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      city: "",
      phone: "",
    },
  });

  const onSubmit = (company) => {
    dispatch(postUser(company)) && navigate("/login");
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            border: mobile ? "none" : "1px solid rgb(102, 113, 133, 0.3)",
            borderRadius: "8px",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}> Información de la empresa </h1>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* //? --------------------------------------------- COMPANY NAME */}
            <span style={{ display: "flex", width: "100%" }}>
              Nombre de la empresa
              <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register("name", { required: true })}
                placeholder="El mundo del papel"
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
              />
              {errors.name && (
                <p style={{ color: "red", width: 400 }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- ADDRESS */}
            <span style={{ display: "flex", width: "100%" }}>
              Dirección<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register("address", { required: true })}
                placeholder="Calle 1"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
              {errors.address && (
                <p style={{ color: "red", width: 400 }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- CITY */}
            <span style={{ display: "flex", width: "100%" }}>
              Ciudad<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register("city", { required: true })}
                placeholder="Bogotá"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
              {errors.city && (
                <p style={{ color: "red", width: 400 }}>
                  Este campo es requerido
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- CONTACT PHONE */}
            <span style={{ display: "flex", width: "100%" }}>
              Teléfono de contacto
              <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register("phone", { required: true })}
                placeholder="123456"
                style={{ borderRadius: "8px", height: "40px", width: 400 }}
              />
              {errors.phone && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              sx={{
                m: 1,
                height: "40px",
                width: 400,
              }}
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
                borderRadius: "8px",
              }}
            >
              Registrarse
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
