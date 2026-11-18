const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  timeZone: "UTC",
});

export function formatDate(date: Date) {
  return dateFormatter.format(date);
}

export function formatMonthYear(date: Date) {
  return monthYearFormatter.format(date);
}
