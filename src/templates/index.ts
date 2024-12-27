import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'react-basic',
    name: 'React Basic App',
    description: 'A simple React application with TypeScript and Tailwind CSS',
    files: [
      {
        name: 'App.tsx',
        language: 'typescript',
        content: `import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">My React App</h1>
    </div>
  )
}

export default App`
      },
      {
        name: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
      }
    ]
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'A modern landing page template with hero section and features',
    files: [
      {
        name: 'App.tsx',
        language: 'typescript',
        content: `import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Company</h1>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">Features</a>
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Welcome to Our Platform</h2>
          <p className="text-xl text-gray-600 text-center">
            The best solution for your business needs.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App`
      }
    ]
  }
];