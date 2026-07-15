const STORAGE_KEY = 'interview-process-coach'

const DEFAULT_STATE = {
  profile: null,
  stepStatus: {},
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_STATE }

    const parsed = JSON.parse(raw)
    return {
      profile: parsed.profile ?? null,
      stepStatus: parsed.stepStatus ?? {},
    }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function saveProfile(profile) {
  const state = loadState()
  state.profile = profile
  saveState(state)
  return state
}

export function updateStepStatus(stepId, status) {
  const state = loadState()
  state.stepStatus[stepId] = status
  saveState(state)
  return state
}

export function clearAllData() {
  localStorage.removeItem(STORAGE_KEY)
}

export function hasSavedProfile() {
  const state = loadState()
  return Boolean(state.profile?.name)
}

export function formatInterviewDate(dateString) {
  if (!dateString) return ''

  const date = new Date(`${dateString}T12:00:00`)
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}
