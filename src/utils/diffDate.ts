/** 두개의 Date를 비교하고 차이를 일 기준으로 반환합니다. */
export function diffDate(date1: Date, date2: Date) {
  const day = 24 * 60 * 60 * 1000;

  return Number(((date1.getTime() - date2.getTime()) / day).toFixed(0));
}
