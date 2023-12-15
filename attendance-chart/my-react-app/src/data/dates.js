const START_DATE = "2023-11-16";
const FINISH_DATE = "2024-01-16";

const DAY_OF_LESSON_1 = 4;
const DAY_OF_LESSON_2 = 6;

const toDate = (date) => new Date(date);

const generateDates = (start, end) => {
  const datesArr = [];
  let currentDate = toDate(start);
  const finishDate = toDate(end);

  const inner = () => {
    if (currentDate > finishDate) return;

    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === DAY_OF_LESSON_1 || dayOfWeek === DAY_OF_LESSON_2) {
      datesArr.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
    inner();
  };

  inner();
  return datesArr;
};

const OUTPUT_DATES = generateDates(START_DATE, FINISH_DATE);

export const ACADEMY_LESSONS = OUTPUT_DATES.map((item) => {
  const date = item.getDate();
  const month = item.getMonth() + 1;
  const year = item.getFullYear();

  return `${year}-${month}-${date}`;
});
