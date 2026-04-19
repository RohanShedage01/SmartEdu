import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './funiq.css'

const funiqSections = [
  {
    id: 'tasks',
    icon: '🧠',
    title: 'Logical Tasks',
    description: 'Practice step-by-step reasoning challenges that build attention, strategy, and critical thinking.',
    related: 'Dashboard planning + assignment practice',
  },
  {
    id: 'games',
    icon: '🎯',
    title: 'Logic Games',
    description: 'Play interactive game-based activities designed to make logic learning fun and memorable.',
    related: 'Spark engagement + TopperSuccess challenge mode',
  },
  {
    id: 'puzzles',
    icon: '🧩',
    title: 'Puzzles',
    description: 'Solve puzzles that reinforce concepts from lessons, past papers, and skill-building sessions.',
    related: 'Revision tools + question paper practice',
  },
]

const sampleLogicalTasks = [
  {
    id: 1,
    title: 'Pattern Recognition',
    difficulty: 'Easy',
    description: 'Find the next number in the sequence: 2, 4, 8, 16, ?',
    answer: '32',
  },
  {
    id: 2,
    title: 'Logical Deduction',
    difficulty: 'Medium',
    description: 'If all cats are animals, and Fluffy is a cat, then Fluffy is definitely an _______.',
    answer: 'animal',
  },
  {
    id: 3,
    title: 'Analytical Reasoning',
    difficulty: 'Hard',
    description: 'Four friends have different favorite subjects. John likes Math, Sarah doesn\'t like Science, Mike likes Physics. If there are only Math, Physics, Chemistry, and History - who likes Chemistry?',
    answer: 'Sarah',
  },
  {
    id: 4,
    title: 'Critical Thinking',
    difficulty: 'Medium',
    description: 'What comes next in the pattern: AB, CD, EF, GH, ?',
    answer: 'IJ',
  },
  {
    id: 5,
    title: 'Problem Solving',
    difficulty: 'Hard',
    description: 'A train leaves the station at 9 AM traveling at 60 km/h. Another train leaves at 10 AM traveling at 80 km/h. When will the second train catch up?',
    answer: '3 PM (after 5 hours)',
  },
  {
    id: 6,
    title: 'Sequence Logic',
    difficulty: 'Medium',
    description: 'If A=1, B=2, C=3... Z=26, what is the value of LOGIC?',
    answer: 'L(12)+O(15)+G(7)+I(9)+C(3)=46',
  },
  {
    id: 7,
    title: 'Venn Diagram',
    difficulty: 'Hard',
    description: 'In a class, 15 students like Math, 20 like English, 10 like both. How many students like at least one subject?',
    answer: '25 students',
  },
  {
    id: 8,
    title: 'Lateral Thinking',
    difficulty: 'Hard',
    description: 'A woman shoots her husband, then holds him underwater for 5 minutes. Right after, they go to dinner. How?',
    answer: 'She is a photographer - she shot his photo and dunked it in water',
  },
  {
    id: 9,
    title: 'Age Puzzle',
    difficulty: 'Medium',
    description: 'Father is 3 times older than his son. After 15 years, he will be 2 times older. What is the father\'s current age?',
    answer: '45 years',
  },
  {
    id: 10,
    title: 'Logical Operators',
    difficulty: 'Medium',
    description: 'If NOT(A OR B) is true, what can we conclude about A and B?',
    answer: 'Both A and B are false',
  },
  {
    id: 11,
    title: 'Speed and Distance',
    difficulty: 'Hard',
    description: 'A car travels 100 km at 50 km/h and returns at 100 km/h. What is the average speed?',
    answer: '66.67 km/h (not 75)',
  },
  {
    id: 12,
    title: 'Word Logic',
    difficulty: 'Easy',
    description: 'What word becomes shorter when you add 2 letters to it?',
    answer: 'Short - add "er" to get "shorter"',
  },
]

const sampleLogicalGames = [
  {
    id: 1,
    title: 'Memory Match',
    gameType: 'Interactive',
    duration: '3-5 min',
    description: 'Flip cards to find matching pairs while racing against the clock. Boost your memory and observation skills.',
    rewards: '50 XP + Badge',
  },
  {
    id: 2,
    title: 'Sudoku Challenge',
    gameType: 'Puzzle',
    duration: '5-10 min',
    description: 'Complete the number grid following logic rules. Perfect for developing systematic thinking.',
    rewards: '75 XP + Leaderboard',
  },
  {
    id: 3,
    title: 'Code Breaker',
    gameType: 'Interactive',
    duration: '4-8 min',
    description: 'Decipher secret codes by identifying patterns and sequences. Test your analytical abilities.',
    rewards: '100 XP + Special Badge',
  },
  {
    id: 4,
    title: 'Tower of Hanoi',
    gameType: 'Strategy',
    duration: '6-12 min',
    description: 'Move discs following the rules to complete the puzzle. Train strategic planning and recursion thinking.',
    rewards: '80 XP + Achievement',
  },
  {
    id: 5,
    title: 'Logic Gates',
    gameType: 'Puzzle',
    duration: '8-15 min',
    description: 'Connect gates to achieve the target output. Understand boolean logic through interactive gameplay.',
    rewards: '120 XP + Certificate',
  },
  {
    id: 6,
    title: 'Chess Puzzle',
    gameType: 'Strategy',
    duration: '5-15 min',
    description: 'Solve chess problems and improve your strategic thinking with each move.',
    rewards: '90 XP + Master Badge',
  },
  {
    id: 7,
    title: 'Pattern Builder',
    gameType: 'Puzzle',
    duration: '3-7 min',
    description: 'Create and recognize complex patterns before time runs out.',
    rewards: '60 XP + Pattern Pro',
  },
  {
    id: 8,
    title: 'Brain Maze',
    gameType: 'Interactive',
    duration: '4-10 min',
    description: 'Navigate through challenging mazes with logical obstacles and strategic decisions.',
    rewards: '70 XP + Explorer Badge',
  },
  {
    id: 9,
    title: 'Number Ninja',
    gameType: 'Interactive',
    duration: '3-6 min',
    description: 'Quick-fire math and logic challenges to test your mental speed.',
    rewards: '55 XP + Speed Demon',
  },
  {
    id: 10,
    title: 'Cryptic Clues',
    gameType: 'Puzzle',
    duration: '7-20 min',
    description: 'Decode mysterious clues and unravel complex logic puzzles.',
    rewards: '110 XP + Detective Badge',
  },
  {
    id: 11,
    title: 'Timeline Quest',
    gameType: 'Strategy',
    duration: '5-12 min',
    description: 'Arrange events in logical order by analyzing clues and relationships.',
    rewards: '85 XP + Historian',
  },
  {
    id: 12,
    title: 'Color Logic',
    gameType: 'Puzzle',
    duration: '4-8 min',
    description: 'Combine colors following logical rules to reach your target.',
    rewards: '65 XP + Color Master',
  },
]

const samplePuzzles = [
  {
    id: 1,
    title: 'Crossword Logic',
    difficulty: 'Easy',
    size: '8x8',
    description: 'Fill in the crossword grid with words that fit both horizontal and vertical clues.',
    timeLimit: '10 min',
  },
  {
    id: 2,
    title: 'Jigsaw Master',
    difficulty: 'Medium',
    size: '500 pieces',
    description: 'Complete the jigsaw puzzle by arranging pieces to form the complete picture.',
    timeLimit: '20 min',
  },
  {
    id: 3,
    title: 'Sliding Tiles',
    difficulty: 'Hard',
    size: '4x4 grid',
    description: 'Rearrange numbered tiles to form a sequence by sliding them into the empty space.',
    timeLimit: '15 min',
  },
  {
    id: 4,
    title: 'Word Search',
    difficulty: 'Easy',
    size: '10x10',
    description: 'Find hidden words in a grid of letters arranged horizontally, vertically, or diagonally.',
    timeLimit: '8 min',
  },
  {
    id: 5,
    title: 'Tangram Challenge',
    difficulty: 'Hard',
    size: '7 pieces',
    description: 'Use seven geometric pieces to form shapes and complete the puzzles.',
    timeLimit: '12 min',
  },
  {
    id: 6,
    title: '3D Cube Puzzle',
    difficulty: 'Hard',
    size: 'Rubik\'s Cube',
    description: 'Solve the 3D cube by rotating faces to get all sides the same color.',
    timeLimit: '25 min',
  },
  {
    id: 7,
    title: 'Match Sticks',
    difficulty: 'Medium',
    size: '10 sticks',
    description: 'Move matches to form new shapes or equations following the given rules.',
    timeLimit: '6 min',
  },
  {
    id: 8,
    title: 'Hidden Picture',
    difficulty: 'Medium',
    size: '50 differences',
    description: 'Find all the differences between two seemingly identical pictures.',
    timeLimit: '14 min',
  },
  {
    id: 9,
    title: 'Pipe Connect',
    difficulty: 'Medium',
    size: '8x8 grid',
    description: 'Connect all the pipes to create a complete network without leaks.',
    timeLimit: '11 min',
  },
  {
    id: 10,
    title: 'Sokoban Quest',
    difficulty: 'Hard',
    size: 'Grid-based',
    description: 'Push boxes to their destinations in this challenging spatial puzzle.',
    timeLimit: '18 min',
  },
  {
    id: 11,
    title: 'Memory Grid',
    difficulty: 'Medium',
    size: '16 tiles',
    description: 'Remember the pattern shown and recreate it by clicking tiles in order.',
    timeLimit: '5 min',
  },
  {
    id: 12,
    title: 'Logic Blocks',
    difficulty: 'Hard',
    size: '9 blocks',
    description: 'Place colored blocks on the board following the constraints and clues.',
    timeLimit: '20 min',
  },
]

const pageMatches = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Logical Tasks mirror your study planning and progress tracking so you can work smarter every day.',
    route: '/dashboard',
  },
  {
    id: 'spark',
    title: 'Spark',
    description: 'Logic Games carry the same vibrant energy and interactivity found in the Spark learning experience.',
    route: '/courses',
  },
  {
    id: 'topper',
    title: 'Topper Success',
    description: 'Puzzles connect to the same mastery-focused mindset featured in TopperSuccess prep stories.',
    route: '/toppersuccess',
  },
]

function Funiq() {
  const navigate = useNavigate()
  const tasksContainerRef = useRef(null)
  const gamesContainerRef = useRef(null)
  const puzzlesContainerRef = useRef(null)
  const tasksSectionRef = useRef(null)
  const gamesSectionRef = useRef(null)
  const puzzlesSectionRef = useRef(null)
  const [_tasksScrollPos, _setTasksScrollPos] = useState(0)
  const [_gamesScrollPos, _setGamesScrollPos] = useState(0)
  const [_puzzlesScrollPos, _setPuzzlesScrollPos] = useState(0)
  const [_tasksCanScroll, _setTasksCanScroll] = useState(false)
  const [_gamesCanScroll, _setGamesCanScroll] = useState(false)
  const [_puzzlesCanScroll, _setPuzzlesCanScroll] = useState(false)

  const checkScroll = () => {
    if (tasksContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tasksContainerRef.current
      _setTasksScrollPos(scrollLeft)
      _setTasksCanScroll(scrollWidth > clientWidth)
    }
    if (gamesContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gamesContainerRef.current
      _setGamesScrollPos(scrollLeft)
      _setGamesCanScroll(scrollWidth > clientWidth)
    }
    if (puzzlesContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = puzzlesContainerRef.current
      _setPuzzlesScrollPos(scrollLeft)
      _setPuzzlesCanScroll(scrollWidth > clientWidth)
    }
  }

  const scroll = (containerRef, direction, amount = 320) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  const scrollToSection = (sectionId) => {
    let targetRef = null
    if (sectionId === 'tasks') targetRef = tasksSectionRef
    else if (sectionId === 'games') targetRef = gamesSectionRef
    else if (sectionId === 'puzzles') targetRef = puzzlesSectionRef

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePageNavigation = (route) => {
    navigate(route)
  }

  React.useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  return (
    <div className="funiq-page">
      <section className="funiq-hero">
        <span className="funiq-tag">FunIQ</span>
        <h1>Logic, Games, and Puzzles for Smarter Learning</h1>
        <p>Explore three interactive FunIQ sections that sharpen reasoning while staying connected to the SmartEdu experience.</p>
      </section>

      <section className="funiq-grid-section">
        <div className="section-heading">
          <p className="section-pill">Explore</p>
          <h2>FunIQ Learning Paths</h2>
        </div>
        <div className="funiq-card-grid">
          {funiqSections.map((section) => (
            <article
              key={section.id}
              className="funiq-card"
              onClick={() => scrollToSection(section.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection(section.id)
                }
              }}
            >
              <div className="funiq-card-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <div className="funiq-card-footer">
                <span>Related:</span>
                <strong>{section.related}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="funiq-tasks-section" ref={tasksSectionRef}>
        <div className="section-heading">
          <p className="section-pill">Sample Tasks</p>
          <h2>Logical Tasks Examples</h2>
          <p className="section-subtitle">Try these reasoning challenges to get started</p>
        </div>
        <div className="scroll-section">
          <button
            className="scroll-arrow left"
            onClick={() => scroll(tasksContainerRef, 'left')}
            aria-label="Scroll left"
          >
            ←
          </button>
          <div className="tasks-scroll-container" ref={tasksContainerRef} onScroll={checkScroll}>
            {sampleLogicalTasks.map((task) => (
              <article key={task.id} className="task-card">
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <span className={`difficulty ${task.difficulty.toLowerCase()}`}>{task.difficulty}</span>
                </div>
                <p className="task-description">{task.description}</p>
                <details className="task-answer">
                  <summary>Show Answer</summary>
                  <p className="answer-text">{task.answer}</p>
                </details>
              </article>
            ))}
          </div>
          <button
            className="scroll-arrow right"
            onClick={() => scroll(tasksContainerRef, 'right')}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </section>

      <section className="funiq-games-section" ref={gamesSectionRef}>
        <div className="section-heading">
          <p className="section-pill">Sample Games</p>
          <h2>Logic Games Examples</h2>
          <p className="section-subtitle">Play these interactive games to learn while having fun</p>
        </div>
        <div className="scroll-section">
          <button
            className="scroll-arrow left"
            onClick={() => scroll(gamesContainerRef, 'left')}
            aria-label="Scroll left"
          >
            ←
          </button>
          <div className="games-scroll-container" ref={gamesContainerRef} onScroll={checkScroll}>
            {sampleLogicalGames.map((game) => (
              <article key={game.id} className="game-card">
                <div className="game-header">
                  <h3>{game.title}</h3>
                  <span className="game-type">{game.gameType}</span>
                </div>
                <div className="game-info">
                  <span className="game-duration">⏱️ {game.duration}</span>
                </div>
                <p className="game-description">{game.description}</p>
                <div className="game-footer">
                  <span className="rewards">🎁 {game.rewards}</span>
                  <button className="play-btn">Play Now</button>
                </div>
              </article>
            ))}
          </div>
          <button
            className="scroll-arrow right"
            onClick={() => scroll(gamesContainerRef, 'right')}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </section>

      <section className="funiq-puzzles-section" ref={puzzlesSectionRef}>
        <div className="section-heading">
          <p className="section-pill">Sample Puzzles</p>
          <h2>Puzzle Examples</h2>
          <p className="section-subtitle">Solve these engaging puzzles to sharpen your spatial and logical skills</p>
        </div>
        <div className="scroll-section">
          <button
            className="scroll-arrow left"
            onClick={() => scroll(puzzlesContainerRef, 'left')}
            aria-label="Scroll left"
          >
            ←
          </button>
          <div className="puzzles-scroll-container" ref={puzzlesContainerRef} onScroll={checkScroll}>
            {samplePuzzles.map((puzzle) => (
              <article key={puzzle.id} className="puzzle-card">
                <div className="puzzle-header">
                  <h3>{puzzle.title}</h3>
                  <span className={`puzzle-difficulty ${puzzle.difficulty.toLowerCase()}`}>{puzzle.difficulty}</span>
                </div>
                <div className="puzzle-meta">
                  <span className="puzzle-size">📐 {puzzle.size}</span>
                  <span className="puzzle-time">⏱️ {puzzle.timeLimit}</span>
                </div>
                <p className="puzzle-description">{puzzle.description}</p>
                <div className="puzzle-footer">
                  <button className="solve-btn">Start Puzzle</button>
                </div>
              </article>
            ))}
          </div>
          <button
            className="scroll-arrow right"
            onClick={() => scroll(puzzlesContainerRef, 'right')}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </section>

      <section className="funiq-match-section">
        <div className="section-heading">
          <p className="section-pill-alt">Connected Pages</p>
          <h2>How FunIQ links to previous SmartEdu pages</h2>
        </div>
        <div className="match-grid">
          {pageMatches.map((item) => (
            <article
              key={item.id}
              className="match-card"
              onClick={() => handlePageNavigation(item.route)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handlePageNavigation(item.route)
                }
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Funiq
