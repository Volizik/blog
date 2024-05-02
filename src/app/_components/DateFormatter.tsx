import { parseISO, format } from "date-fns";
import { ru } from "date-fns/locale";

type Props = {
  dateString: string;
};

export const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  const [first, ...rest] = format(date, "LLLL	d, yyyy", { locale: ru })
  return <time dateTime={dateString}>{first.toUpperCase() + rest.join('')}</time>;
};
