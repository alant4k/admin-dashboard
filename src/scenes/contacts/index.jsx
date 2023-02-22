import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData"


const Contacts = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    { field: "name", headerName: "Nome", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Idade", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "Telefone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Endereço", flex: 1 },
    { field: "city", headerName: "Cidade", flex: 1 },
    { field: "zipCode", headerName: "CEP", flex: 1 },
  ]
  return (
    <Box m="20px">
      <Header title="CONTATOS" subtitle="Lista de Contatos para Referência Futura" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          hideFooterSelectedRowCount
        />
      </Box>
    </Box>
  )
}

export default Contacts