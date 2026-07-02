# Workflow for making changes

- Switch to the main branch and pull new changes with `git pull`
- Create and switch to a new branch named according to the following rules: 
  
  - Follow the convention "type/work-description"
  - Use kebab-case: separate words with hyphens e.g "refactor-query-logic"
  - Use only lowercase letters
  - Don't use special characters including: spaces, underscores, continuous hyphens or punctuation
  - Examples include: `feature/dark-mode`, `bugfix/checkout-crash`, `hotfix/payment-gateway-timeout`, `docs/update-api-readme`

- In your new branch, make changes, test them and then commit. **Make sure to be descriptive and concise about new changes in the commit message**.
- Push your changes in the new branch to github with `git push origin example/branch-name`
- Visit the repo on github and create a pull request, but **do not merge** even if possible.
- Assign @perez-21 to review the pull request or notify him about the pull request however you wish

# On AI-assistend Changes
- When submitting a pull request that involved AI assistance, mention the tools you used, what you used them for and the extent of their involvement.
- **Use AI Responsibly**. When writing code, test and review AI code before submitting a pull request. Unreviewed AI-generated code won't be accepted. When writing documentation, review and edit the output as AI tends to yap a lot. Make sure documentation is concise and clear.

# Updating Documentation
- If any changes/features/fixes would make any information in the repo's README obsolete, make sure to update it. Formatting and content is up to you, but try not to stray far away from the current "style".
- Document any new or updated endpoints in the "Endpoints" section of the repo's README.