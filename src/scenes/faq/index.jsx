import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Box, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Perguntas Frequentes" />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.primary[100]} variant="h4">
						O que é uma pontuação de crédito e por que é importante
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						This Saturday night, mostly clear, with some scattered clouds. Lows
						in the upper forties. Uh? Uh, no, no, no, no. What are you looking
						at, butt-head? No, get out of town, my mom thinks I'm going camping
						with the guys. Well, Jennifer, my mother would freak out if she knew
						I was going up there with you. And I get this standard lecture about
						how she never did that kind of stuff when she was a kid. Now look, I
						think she was born a nun. Um, yeah well I might have sort of ran
						into my parents.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.primary[100]} variant="h4">
						Como escolher o consultor financeiro certo
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Listen, Doc, you know there's something I haven't told you about the
						night we made that tape. Not a word, not a word, not a word now.
						Quiet, uh, donations, you want me to make a donation to the coast
						guard youth auxiliary? Ahh. Ahh. Huh? My name's Lorraine, Lorraine
						Baines.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.primary[100]} variant="h4">
						Quais são as melhores maneiras de economizar dinheiro para a
						aposentadoria
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Whoa, wait, Doc. Scram, McFly. No, bastards. Unfortunately no, it
						requires something with a little more kick, plutonium. Save the
						clock tower, save the clock tower. Mayor Wilson is sponsoring an
						initiative to replace that clock. Thirty years ago, lightning struck
						that clock tower and the clock hasn't run since. We at the Hill
						Valley Preservation Society think it should be preserved exactly the
						way it is as part of our history and heritage.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.primary[100]} variant="h4">
						Como faço para criar um orçamento e cumpri-lo
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Leave her alone, you bastard. What? Well, I figured, what the hell.
						Oh yes sir. You got a real attitude problem, McFly. You're a
						slacker. You remind me of you father when he went her, he was a
						slacker too.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.primary[100]} variant="h4">
						Como faço para investir na bolsa de valores
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						The future, it's where you're going? C'mon, he's not that bad. At
						least he's letting you borrow the car tomorrow night. What, what is
						it hot? Why is she gonna get angry with you? Mother, with Marty's
						parents out of town, don't you think he oughta spend the night,
						after all, Dad almost killed him with the car.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
