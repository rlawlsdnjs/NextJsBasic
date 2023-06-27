import { parseISO, format, isValid } from "date-fns";

export default function Date({ dateString }) {
    const date = parseISO(dateString);

    // 유효한 날짜인지 확인
    if (!isValid(date)) {
        return null;
    }

    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
