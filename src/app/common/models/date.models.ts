export type ISOTime = `${string}:${string}:${string}`; // 00:00:00
export type ISODate = `${string}-${string}-${string}`; // 2025-01-23

export const isISOTimeGreater = (time1: ISOTime, time2: ISOTime): boolean => {
    const date1 = new Date(`1970-01-01T${time1}Z`);
    const date2 = new Date(`1970-01-01T${time2}Z`);

    return date1.getTime() > date2.getTime();
};

export const addISOTimes = (...times: ISOTime[]): ISOTime => {
    let totalSeconds = 0;
    let totalMinutes = 0;
    let totalHours = 0;

    times.forEach(time => {
        const [h, m, s] = time.split(':').map(Number);
        totalSeconds += s;
        totalMinutes += m;
        totalHours += h;
    });

    totalMinutes += Math.floor(totalSeconds / 60);
    totalSeconds %= 60;
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;
    totalHours %= 24;

    return `${String(totalHours).padStart(2, '0')}:${String(
        totalMinutes,
    ).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}` as ISOTime;
};
