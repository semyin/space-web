import format from 'date-fns/format'

export function formatDate(date: number, parseString?: string) {
  return format(date, parseString ? parseString : 'yyyy-MM-dd')
}