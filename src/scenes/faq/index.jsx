import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Box, Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Perguntas Frequentes"/>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.pink[100]} variant="h4">
            O que é uma pontuação de crédito e por que é importante
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bacon ipsum dolor amet exercitation officia eiusmod, short loin flank pariatur jerky. Sunt chislic non, kielbasa hamburger aute occaecat eu ham hock leberkas. Filet mignon est doner sausage, cillum ut tri-tip. Exercitation minim quis, cupim eiusmod salami excepteur chuck. Consequat ribeye voluptate mollit bresaola eiusmod swine. Qui short loin venison t-bone meatball aliqua. Pork occaecat aliquip tri-tip, dolor sint buffalo meatball andouille ut exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.pink[100]} variant="h4">
          Como escolher o consultor financeiro certo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bacon ipsum dolor amet exercitation officia eiusmod, short loin flank pariatur jerky. Sunt chislic non, kielbasa hamburger aute occaecat eu ham hock leberkas. Filet mignon est doner sausage, cillum ut tri-tip. Exercitation minim quis, cupim eiusmod salami excepteur chuck. Consequat ribeye voluptate mollit bresaola eiusmod swine. Qui short loin venison t-bone meatball aliqua. Pork occaecat aliquip tri-tip, dolor sint buffalo meatball andouille ut exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.pink[100]} variant="h4">
          Quais são as melhores maneiras de economizar dinheiro para a aposentadoria
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bacon ipsum dolor amet exercitation officia eiusmod, short loin flank pariatur jerky. Sunt chislic non, kielbasa hamburger aute occaecat eu ham hock leberkas. Filet mignon est doner sausage, cillum ut tri-tip. Exercitation minim quis, cupim eiusmod salami excepteur chuck. Consequat ribeye voluptate mollit bresaola eiusmod swine. Qui short loin venison t-bone meatball aliqua. Pork occaecat aliquip tri-tip, dolor sint buffalo meatball andouille ut exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.pink[100]} variant="h4">
          Como faço para criar um orçamento e cumpri-lo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bacon ipsum dolor amet exercitation officia eiusmod, short loin flank pariatur jerky. Sunt chislic non, kielbasa hamburger aute occaecat eu ham hock leberkas. Filet mignon est doner sausage, cillum ut tri-tip. Exercitation minim quis, cupim eiusmod salami excepteur chuck. Consequat ribeye voluptate mollit bresaola eiusmod swine. Qui short loin venison t-bone meatball aliqua. Pork occaecat aliquip tri-tip, dolor sint buffalo meatball andouille ut exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.pink[100]} variant="h4">
          Como faço para investir na bolsa de valores
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bacon ipsum dolor amet exercitation officia eiusmod, short loin flank pariatur jerky. Sunt chislic non, kielbasa hamburger aute occaecat eu ham hock leberkas. Filet mignon est doner sausage, cillum ut tri-tip. Exercitation minim quis, cupim eiusmod salami excepteur chuck. Consequat ribeye voluptate mollit bresaola eiusmod swine. Qui short loin venison t-bone meatball aliqua. Pork occaecat aliquip tri-tip, dolor sint buffalo meatball andouille ut exercitation.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ