export default async () => {
  const ics = await fetch(
    "https://calendar.google.com/calendar/ical/6b678d7a1fcaa8cbc8c4c3ec341cf24b9aa002eaff96c05cc7a730ecc61b8b51%40group.calendar.google.com/public/basic.ics"
  );

  return new Response(await ics.blob());
};
