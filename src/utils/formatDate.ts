/* 시간 관련 함수 */

// 현재 시간 카운트
export function formatCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const sec = String(now.getSeconds()).padStart(2, '0');

  return `${year}/${month}/${date}\n${hour}:${min}:${sec}`;
}

// formatForecastDate() → 5일 예보 날짜용