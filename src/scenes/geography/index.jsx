import { Box } from "@mui/material";
import { useTheme } from '@mui/material';
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { tokens } from '../../theme';

const Geography = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="GRÁFICO DE MAPA" subtitle="Gráfico de Mapa Simples"/>
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeoChart />
      </Box>
    </Box>
  )
}

export default Geography