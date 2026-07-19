const PLACEHOLDER_PATTERN =
  /\[ADD [^\]]+\]|\[VALIDATE[^\]]*\]|\[Candidate Name\]|\[relevant area\]|Placeholder —/i

export function textHasPlaceholder(value: unknown): boolean {
  if (value == null) return false
  if (typeof value === 'number') return false
  if (typeof value === 'string') return PLACEHOLDER_PATTERN.test(value)
  if (Array.isArray(value)) return value.some(textHasPlaceholder)
  if (typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).some(textHasPlaceholder)
  }
  return false
}

export function slideHasPlaceholders(content: unknown, notes?: unknown): boolean {
  return textHasPlaceholder(content) || textHasPlaceholder(notes)
}
