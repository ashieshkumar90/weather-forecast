export default function useFormatTimeInAMPM(date) {
  return date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
