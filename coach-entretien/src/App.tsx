import { useState, useMemo } from 'react'
import { questions, categoryDescriptions } from './data/questions'
import type { Category } from './data/questions'
import { CategoryFilter } from './components/CategoryFilter'
import { QuestionCard } from './components/QuestionCard'
import { MockInterview } from './components/MockInterview'
import { TipsPanel } from './components/TipsPanel'
import { ProgressDashboard } from './components/ProgressDashboard'
import { useProgress } from './hooks/useProgress'
import './App.css'

type View = 'practice' | 'mock' | 'tips' | 'progress'

function App() {
  const [view, setView] = useState<View>('practice')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const { saveEntry, getRating, clearProgress, stats } = useProgress()

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return questions
    return questions.filter((q) => q.category === selectedCategory)
  }, [selectedCategory])

  const counts = useMemo(() => {
    const result: Record<Category | 'all', number> = {
      all: questions.length,
      comportemental: 0,
      technique: 0,
      produit: 0,
      systeme: 0,
      culture: 0,
    }
    for (const q of questions) {
      result[q.category]++
    }
    return result
  }, [])

  const handleCategoryChange = (cat: Category | 'all') => {
    setSelectedCategory(cat)
    setCurrentIndex(0)
  }

  const currentQuestion = filteredQuestions[currentIndex]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <div>
              <h1>Coach Entretien Cursor</h1>
              <p className="tagline">Préparez-vous à exceller lors de votre entretien</p>
            </div>
          </div>
          <nav className="nav">
            <button
              type="button"
              className={`nav-link ${view === 'practice' ? 'active' : ''}`}
              onClick={() => setView('practice')}
            >
              Pratique
            </button>
            <button
              type="button"
              className={`nav-link ${view === 'mock' ? 'active' : ''}`}
              onClick={() => setView('mock')}
            >
              Simulation
            </button>
            <button
              type="button"
              className={`nav-link ${view === 'tips' ? 'active' : ''}`}
              onClick={() => setView('tips')}
            >
              Conseils
            </button>
            <button
              type="button"
              className={`nav-link ${view === 'progress' ? 'active' : ''}`}
              onClick={() => setView('progress')}
            >
              Progression
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        {view === 'practice' && (
          <div className="practice-view">
            <CategoryFilter
              selected={selectedCategory}
              onSelect={handleCategoryChange}
              counts={counts}
            />
            {selectedCategory !== 'all' && (
              <p className="category-desc">{categoryDescriptions[selectedCategory]}</p>
            )}
            {currentQuestion ? (
              <QuestionCard
                question={currentQuestion}
                index={currentIndex}
                total={filteredQuestions.length}
                progress={getRating(currentQuestion.id)}
                onRate={(rating, notes) =>
                  saveEntry({ questionId: currentQuestion.id, rating, notes })
                }
                onNext={() =>
                  setCurrentIndex((i) => Math.min(i + 1, filteredQuestions.length - 1))
                }
                onPrev={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
              />
            ) : (
              <p className="empty-state">Aucune question dans cette catégorie.</p>
            )}
          </div>
        )}

        {view === 'mock' && <MockInterview />}
        {view === 'tips' && <TipsPanel />}
        {view === 'progress' && (
          <ProgressDashboard stats={stats} onClear={clearProgress} />
        )}
      </main>

      <footer className="footer">
        <p>
          Coach Entretien Cursor — Outil de préparation aux entretiens techniques et
          comportementaux
        </p>
      </footer>
    </div>
  )
}

export default App
