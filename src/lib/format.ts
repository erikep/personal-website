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

export function formatDateRange(
  startDate: Date,
  endDate?: Date,
  current = false,
) {
  const start = formatMonthYear(startDate);
  if (current) return `${start} — Present`;
  if (!endDate) return start;
  return `${start} — ${formatMonthYear(endDate)}`;
}
