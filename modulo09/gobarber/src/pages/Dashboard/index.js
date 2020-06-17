import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { utcToZonedTime } from 'date-fns-tz';

import api from '../../services/api';
import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );
  useEffect(() => {
    async function loadSchadule() {
      const { data } = await api.get('schedule', {
        params: { date },
      });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const dataSchedule = range.map((hour) => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: data.appointments.find((a) =>
            isEqual(parseISO(a.date), checkDate)
          ),
        };
      });

      setSchedule(dataSchedule);
    }
    loadSchadule();
  }, [date]);

  function handlePreviousDate() {
    setDate(subDays(date, 1));
  }
  function handleNextDate() {
    setDate(addDays(date, 1));
    console.tron.log(schedule);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePreviousDate}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormated}</strong>
        <button type="button" onClick={handleNextDate}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {schedule.map((item) => (
          <Time key={item.time} past={item.past} available={!item.appointment}>
            <strong>{item.time}</strong>
            <span>
              {item.appointment ? item.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}

export default Dashboard;
