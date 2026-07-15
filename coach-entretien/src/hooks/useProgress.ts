import { useState, useCallback } from 'react'

export interface ProgressEntry {
  questionId: string
  rating: 'poor' | 'ok' | 'good' | 'excellent'
  notes: string
  timestamp: number
}

const STORAGE_KEY = 'coach-entretien-progress'

function loadProgress(): ProgressEntry[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function useProgress() {
  const [entries, setEntries] = useState<ProgressEntry[]>(loadProgress)

  const saveEntry = useCallback((entry: Omit<ProgressEntry, 'timestamp'>) => {
    setEntries((prev) => {
      const filtered = prev.filter((e) => e.questionId !== entry.questionId)
      const updated = [...filtered, { ...entry, timestamp: Date.now() }]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  const getRating = useCallback(
    (questionId: string) => entries.find((e) => e.questionId === questionId),
    [entries],
  )

  const clearProgress = useCallback(() => {
    setEntries([])
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const stats = {
    total: entries.length,
    excellent: entries.filter((e) => e.rating === 'excellent').length,
    good: entries.filter((e) => e.rating === 'good').length,
    ok: entries.filter((e) => e.rating === 'ok').length,
    poor: entries.filter((e) => e.rating === 'poor').length,
  }

  return { entries, saveEntry, getRating, clearProgress, stats }
}
