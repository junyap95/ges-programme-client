export function isWithinOneWeek(startDateStr: Date) {
  const today = new Date();
  // Calculate the end date (one week after the start date)
  const endDate = new Date(startDateStr);
  endDate.setDate(startDateStr.getDate() + 6); // Add 7 days to the start date
  // Check if the check date is within the range
  return today >= startDateStr && today <= endDate;
}
