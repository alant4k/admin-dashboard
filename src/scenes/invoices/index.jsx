import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData"


const Invoices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Nome", flex: 1, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Telefone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "cost", headerName: "Custo", flex: 1, 
      renderCel: (params) => (
        <Typography color={colors.turquoise[500]}>
          ${params.row.cost}
        </Typography>
      )
    },
    { field: "date", headerName: "Date", flex: 1 },
  ]
  return (
    <Box m="20px">
      <Header title="FATURAS" subtitle="Lista de Saldos de Faturas" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .name-column--cell": {
            color: colors.turquoise[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.pink[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[900]
          },
          "& .MuiDataGrid-footerContainer": {
            borderT: "none",
            backgroundColor: colors.pink[700]
          },
          "& .MuiCheckbox-root": {
            color: `${colors.turquoise[200]} !important`
          }
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Invoices