import { STEPS, getStepById } from './data.js'
import {
  loadState,
  saveProfile,
  updateStepStatus,
  hasSavedProfile,
  formatInterviewDate,
} from './storage.js'

const SCREENS = {
  welcome: document.getElementById('screen-welcome'),
  profile: document.getElementById('screen-profile'),
  journey: document.getElementById('screen-journey'),
  step: document.getElementById('screen-step'),
}

const profileForm = document.getElementById('profile-form')
const profileError = document.getElementById('profile-error')
const resumeButton = document.getElementById('btn-resume')
const journeySummary = document.getElementById('journey-summary')
const stepsList = document.getElementById('steps-list')
const stepHeader = document.getElementById('step-header')
const stepContent = document.getElementById('step-content')

let currentStepId = null

function showScreen(name) {
  Object.entries(SCREENS).forEach(([key, element]) => {
    element.classList.toggle('active', key === name)
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function getStatusLabel(status) {
  switch (status) {
    case 'done':
      return 'Terminé'
    case 'in-progress':
      return 'En cours'
    default:
      return 'À faire'
  }
}

function getStatusClass(status) {
  switch (status) {
    case 'done':
      return 'status-done'
    case 'in-progress':
      return 'status-progress'
    default:
      return 'status-todo'
  }
}

function renderWelcome() {
  const hasProfile = hasSavedProfile()
  resumeButton.classList.toggle('hidden', !hasProfile)
}

function fillProfileForm() {
  const state = loadState()
  if (!state.profile) return

  profileForm.name.value = state.profile.name ?? ''
  profileForm.company.value = state.profile.company ?? ''
  profileForm.role.value = state.profile.role ?? ''
  profileForm.interviewDate.value = state.profile.interviewDate ?? ''
}

function renderJourney() {
  const state = loadState()
  const profile = state.profile

  if (!profile) {
    showScreen('profile')
    return
  }

  journeySummary.innerHTML = `
    <p class="greeting">Bonjour <strong>${escapeHtml(profile.name)}</strong></p>
    <p class="context">
      <span>${escapeHtml(profile.company)}</span>
      <span class="separator">·</span>
      <span>${escapeHtml(profile.role)}</span>
    </p>
    ${
      profile.interviewDate
        ? `<p class="next-date">Prochain entretien : <strong>${formatInterviewDate(profile.interviewDate)}</strong></p>`
        : ''
    }
  `

  stepsList.innerHTML = STEPS.map((step) => {
    const status = state.stepStatus[step.id] ?? 'todo'
    return `
      <article class="step-card card" role="listitem">
        <div class="step-card-top">
          <span class="step-number">${step.number}</span>
          <div class="step-card-info">
            <h3>${escapeHtml(step.title)}</h3>
            <span class="status-badge ${getStatusClass(status)}">${getStatusLabel(status)}</span>
          </div>
        </div>
        <p class="step-objective-preview">${escapeHtml(step.objective.slice(0, 120))}…</p>
        <button
          type="button"
          class="btn btn-outline btn-full"
          data-action="open-step"
          data-step-id="${step.id}"
        >
          Voir les détails
        </button>
      </article>
    `
  }).join('')
}

function renderStep(stepId) {
  const step = getStepById(stepId)
  if (!step) return

  currentStepId = stepId
  const state = loadState()
  const status = state.stepStatus[stepId] ?? 'todo'

  stepHeader.innerHTML = `
    <p class="step-eyebrow">Étape ${step.number} sur ${STEPS.length}</p>
    <h2>${escapeHtml(step.title)}</h2>
    <span class="status-badge ${getStatusClass(status)}">${getStatusLabel(status)}</span>
  `

  stepContent.innerHTML = `
    <section class="detail-block card">
      <h3>Objectif de l'entretien</h3>
      <p>${escapeHtml(step.objective)}</p>
    </section>

    <section class="detail-block card">
      <h3>Questions probables</h3>
      <ul>${step.probableQuestions.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ul>
    </section>

    <section class="detail-block card">
      <h3>Conseils</h3>
      <ul>${step.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
    </section>

    <section class="detail-block card">
      <h3>Questions à poser au recruteur</h3>
      <ul>${step.questionsToAsk.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ul>
    </section>
  `

  showScreen('step')
}

function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

function showProfileError(message) {
  profileError.textContent = message
  profileError.classList.remove('hidden')
}

function hideProfileError() {
  profileError.classList.add('hidden')
  profileError.textContent = ''
}

function handleProfileSubmit(event) {
  event.preventDefault()
  hideProfileError()

  const formData = new FormData(profileForm)
  const profile = {
    name: String(formData.get('name') ?? '').trim(),
    company: String(formData.get('company') ?? '').trim(),
    role: String(formData.get('role') ?? '').trim(),
    interviewDate: String(formData.get('interviewDate') ?? '').trim(),
  }

  if (!profile.name || !profile.company || !profile.role || !profile.interviewDate) {
    showProfileError('Veuillez remplir tous les champs pour continuer.')
    return
  }

  saveProfile(profile)
  renderWelcome()
  renderJourney()
  showScreen('journey')
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]')
  if (!target) return

  const action = target.dataset.action

  switch (action) {
    case 'start':
      fillProfileForm()
      showScreen('profile')
      break
    case 'resume':
      renderJourney()
      showScreen('journey')
      break
    case 'go-welcome':
      renderWelcome()
      showScreen('welcome')
      break
    case 'go-profile':
      fillProfileForm()
      showScreen('profile')
      break
    case 'go-journey':
      renderJourney()
      showScreen('journey')
      break
    case 'open-step':
      renderStep(target.dataset.stepId)
      break
    case 'mark-in-progress':
      if (currentStepId) {
        updateStepStatus(currentStepId, 'in-progress')
        renderStep(currentStepId)
        renderJourney()
      }
      break
    case 'mark-done':
      if (currentStepId) {
        updateStepStatus(currentStepId, 'done')
        renderStep(currentStepId)
        renderJourney()
      }
      break
    default:
      break
  }
})

profileForm.addEventListener('submit', handleProfileSubmit)

renderWelcome()
showScreen('welcome')
