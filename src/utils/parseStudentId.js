/**
 * Parse a student ID like "MUH2211031M" to extract session, year, and term.
 *
 * Format: MUH{YY}{T}{NNNNN}{section}
 *   - YY = last 2 digits of session start year (e.g. 22 → 2022)
 *   - T  = term digit  (1 or 2)
 *   - NNNNN = roll + section info
 *
 * Example: MUH2211031M
 *   Session start = 2022, so session = "2021-2022"
 *   The digit after the two-year digits = 1 → Year=2, Term=1  (pattern: 1→Y2T1, but we do smarter mapping)
 *
 * Actual pattern observed:
 *   MUH 22 1 1031 M
 *   The "22" is admission year (represents session 2021-2022)
 *   The "1" after that indicates the term
 *
 *   Session = (admissionYear - 1) + "-" + admissionYear
 *   Year = calculated from current date and admission year
 *   Term = the digit
 */
export function parseStudentId(id) {
  if (!id || id.length < 6) return null

  // Match pattern: 3 letters + 2 digits (year) + 1 digit (term) + rest
  const match = id.match(/^[A-Za-z]{3}(\d{2})(\d)/)
  if (!match) return null

  const admissionYearShort = parseInt(match[1], 10)
  const termDigit = parseInt(match[2], 10)

  // Full admission year
  const admissionYear = admissionYearShort >= 50 ? 1900 + admissionYearShort : 2000 + admissionYearShort

  // Session runs from previous year to admission year
  const session = `${admissionYear - 1}-${admissionYear}`

  // Current academic year calculation
  const now = new Date()
  const currentYear = now.getFullYear()
  // Academic year typically starts in January for NSTU
  let year = currentYear - admissionYear + 1
  if (year < 1) year = 1
  if (year > 4) year = 4

  // Term is the digit directly (1 or 2)
  const term = termDigit >= 1 && termDigit <= 2 ? termDigit : 1

  return {
    session,
    year: String(year),
    term: String(term),
  }
}
