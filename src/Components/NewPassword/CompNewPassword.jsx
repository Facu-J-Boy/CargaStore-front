import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import "../Login/styles.css";
import { changePassword } from "../../Redux/Actions/PasswordActions/passwordActions";

export default function CompNewPassword() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    dispatch(changePassword(data.password)) && navigate("/login");
  };

  return (
    <Box
      sx={{ display: "flex" }}
      className={mobile ? "" : "loginContainer"}
      style={{ overflow: mobile ? "" : "hidden" }}
    >
      <Box className="formContainer">
        <Box className="headerContainer">
          <h1 style={{ fontSize: "1.5rem" }}> Elige una contraseña nueva </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Introduce una contraseña nueva difícil de olvidar
          </p>
        </Box>

        <form className="inputContainer" onSubmit={handleSubmit(onSubmit)}>
          {/* //? --------------------------------------------- PASSWORD */}
          <p>Contraseña</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput
              {...register("password", { required: true })}
              placeholder="Ingresa contraseña"
              type={showPassword ? "text" : "password"}
              style={{ height: "50px", borderRadius: "8px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <img src="/imgLogin/OpenEyeIcon.svg" />
                    ) : (
                      <img src="/imgLogin/EyeIcon.svg" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && (
              <p style={{ color: "red" }}>Este campo es requerido</p>
            )}
          </FormControl>
          {/* //? --------------------------------------------- CONFIRM PASSWORD */}
          <p>Confirma contraseña</p>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <OutlinedInput
              {...register("confirmPassword", {
                validate: (value, formValues) => value === formValues.password,
              })}
              placeholder="Ingresa contraseña"
              type={showConfirmPassword ? "text" : "password"}
              style={{ height: "50px", borderRadius: "8px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <img src="/imgLogin/OpenEyeIcon.svg" />
                    ) : (
                      <img src="/imgLogin/EyeIcon.svg" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>La contraseña no coincide</p>
            )}
          </FormControl>
          <Button
            variant="contained"
            sx={{
              m: 1,
              width: "350px",
              height: "40px",
            }}
            style={{
              color: Colors.primary.contrastText,
              backgroundColor: Colors.primary.main,
              borderRadius: "8px",
            }}
            type="submit"
          >
            Cambiar contraseña
          </Button>
        </form>
      </Box>
    </Box>
  );
}
