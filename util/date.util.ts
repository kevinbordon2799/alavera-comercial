import dayjs from "dayjs";
import objSupport from "dayjs/plugin/objectSupport";
import "dayjs/locale/es";

dayjs.extend(objSupport);
dayjs.locale("es");

export {
    dayjs,
};