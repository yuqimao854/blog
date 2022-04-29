import dayjs from 'dayjs';

export const formatDate = (date: string, template = 'MMM DD, YYYY') =>
  dayjs(date).format(template);
