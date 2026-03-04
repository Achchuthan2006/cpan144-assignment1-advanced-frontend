# Assignment 1 - Foundations of Advanced Front-End Development

## Features implemented

- Next.js multi-page application
- Navigation menu
- Component-based architecture
- State management with React hooks
- Event handling
- Conditional rendering
- Styled user interface

This project demonstrates these features through reusable React components, page routing, user interactions, and responsive styling.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Application Structure

- `app/page.js` - Home page with welcome message.
- `app/tasks/page.js` - Interactive page with counter and task board.
- `app/feedback/page.js` - Interactive feedback form page.
- `components/NavMenu.js` - Navigation menu component.
- `components/CounterPanel.js` - Counter component with internal state.
- `components/TaskBoard.js` - Task dashboard with internal state and filtering.
- `components/TaskItem.js` - Child component receiving props from `TaskBoard`.
- `components/FeedbackForm.js` - Controlled form with submit handling.
- `app/globals.css` - Global styling and responsive layout.

## Rubric Coverage

1. Application Structure (1 point)
- Organized using Next.js `app/` pages and `components/`.

2. Component Creation (2 points)
- Uses more than three functional components: `NavMenu`, `CounterPanel`, `TaskBoard`, `TaskItem`, `FeedbackForm`.
- Props usage examples:
  - `CounterPanel` receives `initialCount` and `step`.
  - `TaskItem` receives `task` and `onToggle`.

3. State Management (2 points)
- Local state used in multiple components:
  - `NavMenu` (`menuOpen`)
  - `CounterPanel` (`count`)
  - `TaskBoard` (`tasks`, `showCompleted`)
  - `FeedbackForm` (`form`, `submittedData`)

4. Event Handling (2 points)
- Button clicks (counter controls, task filter toggle, task status toggle, mobile menu).
- Form submission with `onSubmit` and `preventDefault`.

5. Conditional Rendering (2 points)
- Dynamic status messages in `CounterPanel`.
- Conditional filter message in `TaskBoard`.
- Submission result section in `FeedbackForm`.

6. Styling (1 point)
- Custom CSS with gradient background, card layout, responsive navigation, buttons, forms, and task UI.

## Submission Checklist

1. GitHub repository link
- Push this project to GitHub and submit the repository URL.

2. Screenshots
- Include screenshots in this `README.md` or upload separately as required by your course instructions.
- Recommended screenshots:
  - Home page
  - Task dashboard interactions
  - Feedback form before and after submission
