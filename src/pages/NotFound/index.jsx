import { Link } from "react-router-dom";

import { Button, Container, Paper, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Paper component='div' elevation={4}
      sx={{
        width: '100%',
        minHeight: '100vh',
        borderRadius: 0,
        textAlign: 'center'
      }}
    >
      <Container maxWidth='md'
        sx={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 'inherit'
        }}
      >

        <Typography component='h1' variant='h2' fontWeight={'bold'}>
          Página não encontrada!
        </Typography>
        <Typography component='p' variant='h6' sx={{ maxWidth: '43ch', my: 3, mx: 'auto' }}>
          Parece que esta página ainda não existe. Clique no botão abaixo para voltar ao início
        </Typography>

        <Link to={'/'}>
          <Button size='large' color='secondary' variant='contained'>
            Voltar
          </Button>
        </Link>

      </Container>
    </Paper>
  )
}