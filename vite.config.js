import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Em produção (GitHub Actions), GITHUB_REPOSITORY = "usuario/nome-do-repo"
// Extraímos só o nome do repo para usar como base path no GitHub Pages.
// Em desenvolvimento local, usa '/' normalmente.
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
