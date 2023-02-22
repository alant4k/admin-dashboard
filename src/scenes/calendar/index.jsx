import { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import brLocale from '@fullcalendar/core/locales/pt-br'
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material"
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected) => {
    const title = prompt("Insira um novo título para o seu evento");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect()

    if(title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected) => {
    const confirm = window.confirm(`Tem certeza de que deseja excluir o evento ${selected.event.title}`)
    if (confirm) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <Header title="AGENDA" subtitle="Agenda interativa" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[900]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant='h5'>Eventos</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.turquoise[500], margin: "10px 0", borderRadius: "2px"
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        locale: brLocale
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            locale={brLocale}
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}

            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}

            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(ev) => setCurrentEvents(ev)}
            initialEvents={[
              { id:"2401", title: "All-day event", date: "2023-03-24" },
              { id:"2408", title: "Timed event", date: new Date(),  }
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar