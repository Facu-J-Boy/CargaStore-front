import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { postUser } from '../../Redux/Actions/UserActions/userActions';
//? --------------------------------------------- MUI
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Button, useMediaQuery } from '@mui/material';
//? --------------------------------------------- STYLES
import { Colors } from '../../Utils/Colors';

export default function CompRegUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mobile = useMediaQuery('(max-width:720px)');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = (user) => {
    dispatch(postUser(user)) &&
      navigate('/register/user/company-info');
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            border: mobile
              ? 'none'
              : '1px solid rgb(102, 113, 133, 0.3)',
            borderRadius: '8px',
            gap: 10,
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.5rem' }}> Datos personales </h1>
          <p
            style={{
              fontWeight: 400,
              color: Colors.secondary.contrastText,
            }}
          >
            Ingresa tus datos para comenzar
          </p>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* //? --------------------------------------------- NAME */}
            <span style={{ display: 'flex', width: '100%' }}>
              Nombre<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                })}
                placeholder="Ingrese nombre"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.name && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.name.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- LAST NAME */}
            <span style={{ display: 'flex', width: '100%' }}>
              Apellido<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('lastname', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                })}
                placeholder="Ingrese apellido"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
              {errors.lastname && (
                <p style={{ color: 'red', width: 400 }}>
                  {errors.lastname.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- EMAIL */}
            <span style={{ display: 'flex', width: '100%' }}>
              Correo electrónico<p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  }, // Si no hay nada escrito en el input de email se coloca un mensaje
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Si en el input no se cumple con esta expreción regular se coloca un mensaje distinto
                    message: 'Email invalido',
                  },
                })}
                placeholder="emailexample.com"
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
              />
            </FormControl>
            {errors.email && (
              <p style={{ color: 'red', width: 400 }}>
                {errors.email.message}
              </p>
            )}

            {/* //? --------------------------------------------- PASSWORD */}
            <span style={{ display: 'flex', width: '100%' }}>
              Crea una contraseña <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                  pattern: {
                    value: /^.{0,8}$/i, // maximo 8 caracteres
                    message: 'Maximo 8 caracteres',
                  },
                })}
                placeholder="Máximo 8 carácteres"
                type={showPassword ? 'text' : 'password'}
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
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
                <p style={{ color: 'red', width: 400 }}>
                  {errors.password.message}
                </p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- CONFIRM PASSWORD */}
            <span style={{ display: 'flex', width: '100%' }}>
              Confirma contraseña <p style={{ color: 'red' }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register('confirmPassword', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                  pattern: {
                    value: /^.{0,8}$/i, // Si en el input no se cumple con esta expreción regular se coloca un mensaje distinto
                    message: 'Maximo 8 caracteres',
                  },
                  validate: (value, formValues) =>
                    value === formValues.password ||
                    'La contraseña no coincide',
                })}
                placeholder="Máximo 8 carácteres"
                type={showConfirmPassword ? 'text' : 'password'}
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  width: 400,
                }}
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
                <p style={{ color: 'red', width: 400 }}>
                  {errors.confirmPassword.message}
                </p>
              )}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              sx={{
                m: 1,
                height: '40px',
                width: 400,
              }}
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
                borderRadius: '8px',
              }}
            >
              Siguiente paso
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
